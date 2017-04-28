var Moment = require('moment')
var Promise = require('bluebird')
module.exports = {

    getDangerLevelinHour: function(lat, lon, time) {
        return new Promise(function(resolve, reject) {
            Inform.find({
                lat: lat,
                lon: lon,
                time: time
            }).exec(
                function(err, inform) {
                    if (err)
                        reject(err)
                    else {
                        resolve(inform)
                    }
                }
            )

        })

    },
    getDangerLevelinMonth: function(lat, lon, year, month) {
        var beginTimeStamp = Moment.utc(year + "-" + month).valueOf()
        var endTimeStamp = Moment.utc(year + "-" + month).valueOf() - 1000 * 60 * 60 * 24
        var results = [];
        return new Promise(function(resolve, reject) {
            for (var i = beginTimeStamp; i <= endTimeStamp; i += 1000 * 60 * 60 * 24) {
                Inform.find({
                    lat: lat,
                    lon: lon,
                    time: time
                }).exec(
                    function(err, inform) {
                        if (err)
                            reject(err)
                        else {
                            results.push(inform)
                            if (i == endTimeStamp) {
                                resovle(results)
                            }
                        }
                    }
                )

            }

        })

    },
    setInitBeachLocation: function() {
        var beachLoactionJson = require('../../assets/json/beach.json')
        return Promise.map(beachLoactionJson, function(item) {
            return new Promise(function(resolve, reject) {
                Beach.create({
                    lat: item.lat,
                    lon: item.lon,
                    name: item.name
                }).exec(function(err, beach) {
                    if (err) {
                        reject()
                    } else {
                        resolve()
                    }
                })
            })
        })
    }

}