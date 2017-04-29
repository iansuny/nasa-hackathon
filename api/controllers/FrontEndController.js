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
            case 'date':
                console.log(req.param('name'));
                return res.view('blank', {
                    layout: 'date',
                    name: "123"
                })
            case 'mytrip':
                return res.view('blank', {
                    layout: 'mytrip',
                })
            default:
                return res.redirect('/');
        }
    },

};