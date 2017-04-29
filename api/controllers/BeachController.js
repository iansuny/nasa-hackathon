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
                            result: result
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