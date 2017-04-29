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
                                "lat": 27.846710259332895,
                                "lon": -82.8245715277867,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "St George Island Gulfside"
                            }, {
                                "lat": 27.846710259332895,
                                "lon": -82.8245715277867,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "St George Island Gulfside"
                            }, {
                                "lat": 27.846710259332895,
                                "lon": -82.8245715277867,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "St George Island Gulfside"
                            }, {
                                "lat": 27.846710259332895,
                                "lon": -82.8245715277867,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "St George Island Gulfside"
                            }, {
                                "lat": 27.856119029523747,
                                "lon": -82.79868040275704,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Clearwater Beach"
                            }, {
                                "lat": 27.856119029523747,
                                "lon": -82.79868040275704,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Clearwater Beach"
                            }, {
                                "lat": 27.641239095158284,
                                "lon": -82.65700357797384,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Fort Desoto"
                            }, {
                                "lat": 27.53831691727592,
                                "lon": -82.71983543159806,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Coquina Beach"
                            }, {
                                "lat": 27.41189282609304,
                                "lon": -82.64597798880483,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Coquina Beach"
                            }, {
                                "lat": 27.365269189840433,
                                "lon": -82.58401657637393,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Lido Key"
                            }, {
                                "lat": 27.19846062475586,
                                "lon": -82.51230922429562,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Siesta Key"
                            }, {
                                "lat": 27.796958037720337,
                                "lon": -97.41338443465365,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Venice Beach"
                            }, {
                                "lat": 27.02256545358136,
                                "lon": -82.42743719762771,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Manasota Beach"
                            }, {
                                "lat": 26.770897868772387,
                                "lon": -82.30002260406228,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "GI State Park(South Lighthouse)"
                            }, {
                                "lat": 26.5105598881974,
                                "lon": -82.0736628496584,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Vanderbilt Beach"
                            }, {
                                "lat": 26.5105598881974,
                                "lon": -82.0736628496584,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Vanderbilt Beach"
                            }, {
                                "lat": 25.9704420717195,
                                "lon": -81.76950365402851,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "South Marco Beach"
                            }, {
                                "lat": 25.9704420717195,
                                "lon": -81.76950365402851,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
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