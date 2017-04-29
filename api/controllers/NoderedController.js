/**
 * NoderedController
 *
 * @description :: Server-side logic for managing nodereds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    sendWarnToApp: function(req, res) {
        let year = req.param('year');
        let month = req.param('month')
        ToolService.changeAllDataToDanger(year, month).then(function(resolve) {
            return res.json({
                result: "ok"
            })
        })
    }
};