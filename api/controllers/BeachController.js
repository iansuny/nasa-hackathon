/**
 * BeachController
 *
 * @description :: Server-side logic for managing beaches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Promise = require('bluebird')
module.exports = {
    getAllBeachDangerLevel: function(req, res) {
        var time = req.param('time')
        var day = ToolService.formatTimeStampMinus(time);
        time = day.valueOf();
        var result = [];
        Beach.find({}).exec(
            function(err, beachs) {
                if (err)
                    return res.negotiate(err)
                else {
                    var promiseArr = []
                    for (let beachIndex in beachs) {
                        promiseArr.push(ToolService.getDangerLevelinHour(beachs[beachIndex].lat, beachs[beachIndex].lon, time).then(
                            function(resolve) {
                                result.push(resolve);
                            }))
                    }
                    Promise.all(promiseArr).then(function() {
                        return res.json({
                            // result: result
                            //fake
                            result: [{
                                "lat": 28.03754000222624,
                                "lon": -82.87431374546918,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Clearwater Beach"
                            }, {
                                "lat": 28.03754000222624,
                                "lon": -82.87431374546918,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Clearwater Beach"
                            }, {
                                "lat": 28.03754000222624,
                                "lon": -82.87431374546918,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Clearwater Beach"
                            }, {
                                "lat": 28.03754000222624,
                                "lon": -82.87431374546918,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Clearwater Beach"
                            }, {
                                "lat": 28.03754000222624,
                                "lon": -82.87431374546918,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Clearwater Beach"
                            }, {
                                "lat": 28.03754000222624,
                                "lon": -82.87431374546918,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Clearwater Beach"
                            }, {
                                "lat": 27.665151217072143,
                                "lon": -82.69272168624656,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Fort Desoto"
                            }, {
                                "lat": 27.4853100452455,
                                "lon": -82.68006526979174,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Coquina Beach"
                            }, {
                                "lat": 27.4853100452455,
                                "lon": -82.68006526979174,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Coquina Beach"
                            }, {
                                "lat": 27.324282411580963,
                                "lon": -82.59479604145403,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Lido Key"
                            }, {
                                "lat": 27.233515396172525,
                                "lon": -82.53143992297512,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Siesta Key"
                            }, {
                                "lat": 27.780619755229388,
                                "lon": -97.38122813230694,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Venice Beach"
                            }, {
                                "lat": 26.983975890410875,
                                "lon": -82.40366514692131,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Manasota Beach"
                            }, {
                                "lat": 26.66834587946663,
                                "lon": -82.26270368461019,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "GI State Park(South Lighthouse)"
                            }, {
                                "lat": 26.46848856025335,
                                "lon": -82.00840776813709,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Light House Beach Sanibel Island"
                            }, {
                                "lat": 26.266242029310966,
                                "lon": -81.8583987194877,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Vanderbilt Beach"
                            }, {
                                "lat": 26.266242029310966,
                                "lon": -81.8583987194877,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "Vanderbilt Beach"
                            }, {
                                "lat": 25.96631497953799,
                                "lon": -81.76400086337411,
                                "UVLevel": "low",
                                "SeaSpeedLeveL": "low",
                                "time": 1487635200000,
                                "HABLevel": "hard",
                                "name": "South Marco Beach"
                            }]
                        })
                    })

                }

            })
    },
    getBeachDangerLevelinHour: function(req, res) {
        var time = req.param('time')
        var day = ToolService.formatTimeStampMinus(time);
        time = day.valueOf();
        var lat = req.param('lat')
        var lon = req.param('lon')
        ToolService.getDangerLevelinHour(lat, lon, time).then(
            function(resolve) {
                return res.json({
                    result: resolve
                })
            })
    },
    getBeachDangerLevelinMonth: function(req, res) {
        var year = req.param('year')
        var month = req.param('month')
        var lat = req.param('lat')
        var lon = req.param('lon')
        ToolService.getDangerLevelinMonth(lat, lon, year, month).then(
            function(resolve) {
                return res.json({
                    result: resolve
                })
            })
    },

};