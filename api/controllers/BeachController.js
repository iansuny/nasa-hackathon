/**
 * BeachController
 *
 * @description :: Server-side logic for managing beaches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getAllBeachDangerLevel: function(req, res) {
        var time = req.param('time')
        var result = [];
        Beach
            .find({}).exec(
                function(err, beachs) {
                    if (err)
                        return res.negotiate(err)
                    else {
                        for (let beachIndex in beachs) {
                            ToolService.getDangerLevelinHour(beachs[beachIndex].lat, beachs[beachIndex].lon, time).then(
                                function(resolve) {
                                    result.push(resolve);
                                })
                            return res.json(result)
                        }
                    }

                })
    },
    getBeachDangerLevelinHour: function(req, res) {
        var time = req.param('time')
        var lat = req.param('lat')
        var lon = req.param('lon')
        ToolService.getDangerLevelinHour(lat, lon, time).then(
            function(resolve) {
                return res.json(resolve)
            })
    },
    getBeachDangerLevelinMonth: function(req, res) {
        var month = req.param('month')
        var lat = req.param('lat')
        var lon = req.param('lon')
        ToolService.getDangerLevelinMonth(lat, lon, month).then(
            function(resolve) {
                return res.json(resolve)
            })
    },

};