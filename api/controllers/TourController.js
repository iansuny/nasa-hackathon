/**
 * TourController
 *
 * @description :: Server-side logic for managing tours
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    createTour: function(req, res) {
        var userId = req.session.userId;
        var date = req.param('date');
        var location = req.param('location');

        Tour.create({
                userId: userId,
                date: date,
                location: location,
            })
            .exec(function(err, tour) {
                if (err) return res.negotiate(err);
                return res.json({
                    result: 'ok'
                });
            })
    },

    getToursByUserId: function(req, res) {
        Tour.find({
                userId: req.session.userId
            })
            .exec(function(err, tours) {
                if (err) return res.negotiate(err);
                return res.json({
                    result: tours
                });
            })
    },

};