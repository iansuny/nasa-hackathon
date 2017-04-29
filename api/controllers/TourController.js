/**
 * TourController
 *
 * @description :: Server-side logic for managing tours
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Promise = require('bluebird')
prepareListArr = [
    "眼鏡",
    "毛巾",
    "雨傘",
    "雨衣",
    "防曬乳",
    "外套",
    "帽子"
]
module.exports = {

    createTour: function (req, res) {
        var userId = "9487"
        var date = req.param('date');
        var name = req.param('name');

        Tour
            .create({userId: userId, date: date, name: name})
            .exec(function (err, tour) {
                if (err) 
                    return res.negotiate(err);
                return res.json({result: 'ok'});
            })
    },

    getToursByUserId: function (req, res) {
        var results = [];
        Tour
            .find({userId: "9487"})
            .exec(function (err, tours) {
                if (err) 
                    return res.negotiate(err);
                Promise
                    .map(tours, function (tour) {
                        return ToolService
                            .getDangerLevelinHourByName(tour.name, tour.time)
                            .then(function (resolve) {

                                var dangerLevel = resolve.dangerLevel
                                tour.dangerLevel = dangerLevel
                                results.push(tour)
                            })
                    })
                    .then(function () {
                        return res.json({result: results});
                    })

            })
    },
    deleteTour: function (req, res) {
        Tour
            .destory({
                userId: "9487",
                data: req.param("data")
            })
            .exec(function (err, res) {
                if (err) 
                    return res.negotiate(err);
                else {
                    return res.json({result: "ok"})
                }
            })
    },
    prepareList: function (req, res) {
        var tempArr = JSON.parse(JSON.stringify(prepareListArr))
        var sugArr = [];
        var i = tempArr.length;
        var j = Math.floor(Math.random() * (i + 1));
        sugArr.push(tempArr[j]);
        tempArr.splice(j, 1);
        i = tempArr.length;
        j = Math.floor(Math.random() * (i + 1));
        sugArr.push(tempArr[j]);
        return res.json({result: sugArr})

    }

};