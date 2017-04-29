/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var moment = require('moment');
module.exports.bootstrap = function (cb) {

    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's
    // waiting on the bootstrap)

    var service = require('../api/services/ToolService');
    service.initLoRaWarn()

    // service.setFakeDate(); service.changeAllDataToDanger("2017", "04");
    // service.clearInform() console.log("test moment" +
    // moment.utc("2017-04-11").valueOf()); service
    // .getDangerLevelinHour("25.939219", "-81.731920",
    // moment.utc("2017-04-11").valueOf())     .then(function (resolve) {
    // console.log(resolve);     }) service     .getDangerLevelinHourByName("South
    // Marco Beach", "1491868800000")     .then(function (resolve) {
    // console.log(resolve)     }) service.changeAllDataToDanger("2017", "04")
    cb();
};