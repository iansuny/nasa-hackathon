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
            case 'news':
                return res.view('blank', {
                    layout: 'news',
                })
            default:
                return res.redirect('/');
        }
    },

};