var Moment = require('moment')
var Promise = require('bluebird')

module.exports = {
    getDangerLevelinHourByName: function (name, time) {

        return new Promise(function (resolve, reject) {

            Beach
                .findOne({name: name})
                .exec(function (err, beachInform) {
                    if (err) {
                        reject();
                    } else {
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
        console.log("getDangerLevelinMonth")
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
        var results = [];
        return new Promise(function (resolve, reject) {
            for (let i = beginTimeStamp; i <= endTimeStamp; i += 1000 * 60 * 60 * 24) {
                Inform
                    .findOne({lat: lat, lon: lon, time: i})
                    .exec(function (err, inform) {
                        // console.log("get one day data") console.log(inform)
                        if (err) 
                            reject(err)
                        else {
                            results.push(inform)
                            // console.log("now timeStamp:" + i); console.log("target timeStamp: " +
                            // endTimeStamp)
                            if (i == endTimeStamp) {
                                // console.log('finish timestamp') console.log('lat:' + lat); console.log('lon:'
                                // + lon);
                                Beach
                                    .findOne({lat: lat, lon: lon})
                                    .exec(function (err, beach) {
                                        console.log(beach)
                                        if (err) 
                                            reject(err)
                                            // console.log({monthInfo: results, picture: beach.picture, name: beach.name})
                                        resolve({monthInfo: results, picture: beach.picture, name: beach.name})

                                    })

                            }
                        }
                    })

            }

        })

    },
    setInitBeachLocation: function () {
        var beachLoactionJson = require('../../assets/json/beach.json')
        return Promise.map(beachLoactionJson, function (item) {
            return new Promise(function (resolve, reject) {
                console.log('=============in the insert')
                Beach
                    .findOne({lat: item.lat, lon: item.lon})
                    .exec(function (err, beachInform) {
                        console.log(beachInform);
                        if (err) {
                            console.log(err)
                            reject()
                        }
                        if (beachInform) {
                            Beach.update({
                                lat: item.lat,
                                lon: item.lon
                            }, {
                                    lat: item.lat,
                                    lon: item.lon,
                                    picture: item.picture,
                                    name: item.name
                                })
                                .exec(function (err, beach) {
                                    if (err) {
                                        reject()
                                    } else {
                                        resolve()
                                    }
                                })
                        } else {
                            console.log('can not find inform so create');
                            Beach
                                .create({lat: item.lat, lon: item.lon, name: item.name, picture: item.picture})
                                .exec(function (err, beach) {
                                    if (err) {
                                        reject()
                                    } else {
                                        resolve()
                                    }
                                })
                        }
                    })

            })
        })
    },
    formatTimeStampMinus: function (timestamp) {

        var day = new Date(timestamp)
        day.setMinutes(0);
        day.setSeconds(0);
        day.setMilliseconds(0)
        return day;
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
    setFakeDate: function () {
        console.log("in setFake")
        var fakeData = require('../../assets/json/fake.json')

        fakeData.forEach(function (inform) {
            Inform
                .findOne({lat: inform.lat, lon: inform.lon, time: inform.time})
                .exec(function (err, oneInform) {

                    let insertData = {};
                    for (var key in inform) {
                        insertData[key] = inform[key];
                    }
                    Inform
                        .create(insertData)
                        .exec(function (err, data) {
                            if (err) {
                                // console.log("create fake date err : " + err);
                            } else {
                                // console.log("create data :" + data); console.log('ok');
                            }
                        })

                })
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
    initLoRaWarn: function () {
        Nodered
            .find()
            .exec(function (err, res) {
                console.log(res)
                if (err) {
                    console.log('initLoRaWarn err' + err)
                } else {
                    if (res.length == 1) {
                        Nodered.update({}, {warn: "false"})
                        console.log("node red warn update")
                    } else {
                        Nodered
                            .create({warn: "false"})
                            .exec(function (err) {
                                if (err) {
                                    console.log("node red warn create err" + err)
                                } else {
                                    console.log("node red warn create")
                                }
                            })

                    }
                }
            })
    }

}