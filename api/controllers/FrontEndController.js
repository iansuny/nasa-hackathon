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
            default:
                return res.redirect('/');
        }
    },

};