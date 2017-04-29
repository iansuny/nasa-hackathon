/**
 * TourController
 *
 * @description :: Server-side logic for managing tours
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Promise = require('bluebird')
module.exports = {

    createTour: function(req, res) {
        var userId = req.session.userId;
        var date = req.param('date');
        var name = req.param('name');

        Tour.create({
                userId: userId,
                date: date,
                name: name,
            })
            .exec(function(err, tour) {
                if (err) return res.negotiate(err);
                return res.json({
                    result: 'ok'
                });
            })
    },

    getToursByUserId: function(req, res) {
        var results = [];
        Tour.find({
            userId: req.session.userId
        }).exec(function(err, tours) {
            if (err) return res.negotiate(err);
            Promise.map(tours, function(tour) {
                return ToolService.getDangerLevelinHourByName(tour.name, tour.time).then(function(resolve) {

                    var dangerLevel = resolve.dangerLevel
                    tour.dangerLevel = dangerLevel
                    results.push(tour)
                })
            }).then(function() {
                return res.json({
                    result: results
                });
            })

        })
    }

};