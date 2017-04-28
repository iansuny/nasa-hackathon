var Monent = require('monent')

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
        var beginTimeStamp = Monent.utc(year + "-" + month).valueOf()
        var endTimeStamp = Monent.utc(year + "-" + month).valueOf() - 1000 * 60 * 60 * 24
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
        var beachLoactionJson = require('')
    }

}