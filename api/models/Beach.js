/**
 * Beach.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    lat: {
      type: 'float',
      required: true
    },
    lon: {
      type: 'float',
      required: true
    },
    name: {
      type: 'string',
      required: true
    }
  }
};
