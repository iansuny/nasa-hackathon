/**
 * NoderedController
 *
 * @description :: Server-side logic for managing nodereds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    sendWarnToApp: function (req, res) {
        let year = req.param('year');
        let month = req.param('month')
        ToolService
            .changeAllDataToDanger(year, month)
            .then(function (resolve) {
                return res.json({result: "ok"})
            })
    },
    sendLoRaWarnToApp: function (req, res) {

        Nodered.update({}, {warn: "true"})
            .exec(function (err, res) {
                if (err) 
                    return res.negotiate(err);
                else {
                    return res.json({result: "ok"})
                }
            })

    },
    offLoRaWarn: function (req, res) {
        Nodered.update({}, {warn: "false"})
            .exec(function (err, res) {
                if (err) 
                    return res.negotiate(err);
                else {
                    return res.json({result: "ok"})
                }
            })
    }

};