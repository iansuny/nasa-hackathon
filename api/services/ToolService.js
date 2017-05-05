var Moment = require('moment')
var Promise = require('bluebird')

module.exports = {
    getYearFromTimeStamp: function (timeStamp) {
        if (typeof timeStamp == 'String') {
            timeStamp = parseInt(timeStamp, 10)
        }
        return Moment
            .utc(timeStamp)
            .year();
    },
    getMonthFromTimeStamp: function (timeStamp) {
        if (typeof timeStamp == 'String') {
            timeStamp = parseInt(timeStamp, 10)
        }
        return Moment
            .utc(timeStamp)
            .month();
    },

    formatTimeStampUnderMins: function (timeStamp) {
        if (typeof timeStamp != 'init') {
            timeStamp = parseInt(timeStamp, 10)
        }
        var noMinTimeStamp = Moment.utc(timeStamp);
        noMinTimeStamp.minute(0)
        noMinTimeStamp.second(0)
        noMinTimeStamp.millisecond(0)
        return noMinTimeStamp.valueOf();
    }
}