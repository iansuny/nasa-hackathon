var Moment = require('moment')
var Promise = require('bluebird')

module.exports = {
    getDangerLevelinHourByName: function (name, time) {

        return new Promise(function (resolve, reject) {

            Beach
                .findOne({name: name})
                .exec(function (err, beachInform) {
                    if (err) {
                        reject(err);
                    } else {
                        if (typeof time != 'string') {
                            time = time.toString();
                        }

                        Inform
                            .findOne({lon: beachInform.lon, lat: beachInform.lat, time: time})
                            .exec(function (err, inform) {
                                if (err) 
                                    reject(err)
                                else {
                                    resolve(inform)
                                }
                            })
                    }

                })
        })
    },
    getDangerLevelinHour: function (lat, lon, time) {

        console.log('getDangerLevelinHour time :' + time)
        return new Promise(function (resolve, reject) {
            if (typeof time != 'string') {
                time = time.toString();
            }
            if (typeof lat != 'string') {
                lat = lat.toString();
            }
            if (typeof lon != 'string') {
                lon = lon.toString();
            }
            Inform
                .findOne({lat: lat, lon: lon, time: time})
                .exec(function (err, inform) {
                    if (err) 
                        reject(err)
                    else {
                        resolve(inform)
                    }
                })

        })

    },
    getDangerLevelinMonth: function (lat, lon, year, month) {

        beginYear = parseInt(year, 10);
        beginMonth = parseInt(month, 10)
        if (beginMonth < 10) {
            beginMonth = "0" + beginMonth.toString()
        }
        var beginTimeStamp = Moment
            .utc(beginYear + "-" + beginMonth)
            .valueOf()

        console.log("beginTimeStamp: " + beginTimeStamp);

        var oneMoreMonth = (parseInt(beginMonth, 10) + 1)
        if (oneMoreMonth == 13) {
            oneMoreMonth = 1
            beginYear++
        }
        if (oneMoreMonth < 10) {
            oneMoreMonth = "0" + oneMoreMonth.toString()
        }

        var endTimeStamp = Moment
            .utc(beginYear + "-" + oneMoreMonth)
            .valueOf() - 1000 * 60 * 60 * 24
        console.log("endTimeStamp: " + endTimeStamp);
        var results = [];
        return new Promise(function (resolve, reject) {
            for (let i = beginTimeStamp; i <= endTimeStamp; i += 1000 * 60 * 60 * 24) {
                InformService
                    .getDangerLevelinHour(lat, lon, i.toString())
                    .then(function (hourInfom) {
                        results.push(hourInfom)
                        if (i == endTimeStamp) {
                            resolve(results)

                        }
                    })

            }

        })

    },
    changeAllDataToDanger: function (year, month) {
        console.log("changeAllDataToDanger")
        var beginTimeStamp = Moment
            .utc(year + "-" + month)
            .valueOf()
        console.log("beginTimeStamp: " + beginTimeStamp);
        console.log(" one more month :" + (parseInt(month, 10) + 1));
        var oneMoreMonth = (parseInt(month, 10) + 1)
        if (oneMoreMonth < 10) {
            oneMoreMonth = "0" + oneMoreMonth.toString()
        } else if (oneMoreMonth == 13) {
            year = parseInt(year, 10) + 1
            oneMoreMonth = "01"
        }
        var endTimeStamp = Moment
            .utc(year + "-" + oneMoreMonth)
            .valueOf() - 1000 * 60 * 60 * 24
        console.log("endTimeStamp: " + endTimeStamp);
        return new Promise(function (resolve, reject) {
            for (let i = beginTimeStamp; i <= endTimeStamp; i += 1000 * 60 * 60 * 24) {
                Inform.update({
                    time: i
                }, {
                        dangerLevel: 'high',
                        SeaSpeedLeveL: 'high'
                    })
                    .exec(function (err, inform) {
                        if (i == endTimeStamp) {
                            resolve()
                        }
                    })

            }

        })
    },
    clearInform: function () {
        return new Promise(function (resolve, reject) {
            Inform
                .destroy({})
                .exec(function (err, res) {
                    if (err) {
                        reject();
                    } else {
                        resolve();
                    }
                })
        })

    },
    getAllDangerLevelInHour: function (time) {
        time = ToolService.formatTimeStampUnderMins(time);
        console.log(time)
        return new Promise(function (rs, rj) {
            Beach
                .find({})
                .exec(function (err, beachs) {
                    if (err) {
                        console.log(err)
                    } else {
                        Promise
                            .map(beachs, function (beach) {
                                return InformService.getDangerLevelinHour(beach.lat, beach.lon, time)
                            })
                            .then(function (informs) {
                                rs(informs)
                            })
                    }
                })
        })

    }
}