/**
 * FrontEndController
 *
 * @description :: Server-side logic for managing Frontends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    indexIO: function(req, res) {
        return res.view('blank', {
            layout: 'index'
        })
    },

    actionIO: function(req, res) {
        action = req.param('action');
        switch (action) {
            case 'map':
                return res.view('blank', {
                    layout: 'map',
                })
            case 'mytrip':
                return res.view('blank', {
                    layout: 'mytrip',
                })
            default:
                return res.redirect('/');
        }
    },

    dateIO: function(req, res) {
        lat = req.param('lat');
        lon = req.param('lon');

        return res.view('blank', {
            layout: 'date',
            lat: lat,
            lon: lon
        })
    },

};