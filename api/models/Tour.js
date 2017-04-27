/**
 * Tour.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        userId: {
            type: 'string',
            required: true
        },

        date: {
            type: 'date',
            required: true
        },

        location: {
            type: 'string',
            required: true
        }

    }
};

{
    userID: "norman",
    data: "2017/04/27",
    location: ""
}