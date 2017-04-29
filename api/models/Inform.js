/**
 * Inform.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
/*
/* time Format  timestamp */
/* lat Format  123N.12300 */
/* lon Format  123E.12300 */

module.exports = {

    attributes: {
        picture: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        lat: {
            type: 'float',
            required: true
        },
        lon: {
            type: 'float',
            required: true
        },
        time: {
            type: 'string',
            required: true
        },
        dangerLevel: {
            type: 'string',
            enum: [
                'none', 'mid', 'high'
            ],
            required: true
        },
        UVLevel: {
            type: 'string',
            enum: [
                'none', 'mid', 'high'
            ],
            required: true
        },
        UVI: {
            type: 'string',
            // required: true
        },
        SeaSpeedLeveL: {
            type: 'string',
            enum: [
                'none', 'mid', 'high'
            ],
            required: true
        },
        SeaSpeed: {
            type: 'string',
            // required: true
        },
        HABLevel: {
            type: 'string',
            enum: [
                'none', 'mid', 'high'
            ],
            required: true
        },
        weatherInfo: {
            type: 'json',
            // requried: true
        }

    }
};