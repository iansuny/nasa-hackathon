var Moment = require('moment')
var Promise = require('bluebird')

module.exports = {
    initLoRaWarn: function () {
        Nodered
            .find()
            .exec(function (err, res) {
                console.log(res)
                if (err) {
                    console.log('initLoRaWarn err' + err)
                } else {
                    if (res.length == 1) {
                        Nodered.update({}, {warn: "false"})
                        console.log("node red warn update")
                    } else {
                        Nodered
                            .create({warn: "false"})
                            .exec(function (err) {
                                if (err) {
                                    console.log("node red warn create err" + err)
                                } else {
                                    console.log("node red warn create")
                                }
                            })

                    }
                }
            })
    },
    setDataBase: function () {
        console.log("insert  db")
        var db = require('../../assets/json/db.json')
        Inform
            .find()
            .exec(function (err, res) {
                if (res.length > 0) {
                    console.log('no need to insert db')
                } else {
                    console.log('start to insert db')
                    Inform
                        .create(db)
                        .exec(function (err, res) {
                            if (err) {
                                console.log("insert one inform failedd :" + err)
                            }
                        })

                    // (function (inform) {     console.log("insert :" + inform) });
                }
            })

    },
    setInitBeachLocation: function () {
        var beachLoactionJson = require('../../assets/json/beach.json')
        return Promise.map(beachLoactionJson, function (item) {
            return new Promise(function (resolve, reject) {
                console.log('=============in the insert')
                Beach
                    .findOne({lat: item.lat, lon: item.lon})
                    .exec(function (err, beachInform) {
                        console.log(beachInform);
                        if (err) {
                            console.log(err)
                            reject()
                        }
                        if (beachInform) {
                            Beach.update({
                                lat: item.lat,
                                lon: item.lon
                            }, {
                                    lat: item.lat,
                                    lon: item.lon,
                                    picture: item.picture,
                                    name: item.name
                                })
                                .exec(function (err, beach) {
                                    if (err) {
                                        reject()
                                    } else {
                                        resolve()
                                    }
                                })
                        } else {
                            console.log('can not find inform so create');
                            Beach
                                .create({lat: item.lat, lon: item.lon, name: item.name, picture: item.picture})
                                .exec(function (err, beach) {
                                    if (err) {
                                        reject()
                                    } else {
                                        resolve()
                                    }
                                })
                        }
                    })

            })
        })
    }
}