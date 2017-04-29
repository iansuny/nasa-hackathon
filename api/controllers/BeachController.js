/**
 * BeachController
 *
 * @description :: Server-side logic for managing beaches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Promise = require('bluebird')
module.exports = {
    getAllBeachDangerLevel: function(req, res) {
        var time = req.param('time')
        var day = ToolService.formatTimeStampMinus(time);
        time = day.valueOf();
        var result = [];
        Beach.find({}).exec(
            function(err, beachs) {
                if (err)
                    return res.negotiate(err)
                else {
                    var promiseArr = []
                    for (let beachIndex in beachs) {
                        promiseArr.push(ToolService.getDangerLevelinHour(beachs[beachIndex].lat, beachs[beachIndex].lon, time).then(
                            function(resolve) {
                                result.push(resolve);
                            }))
                    }
                    Promise.all(promiseArr).then(function() {
                        return res.json({
                            // result: result
                            //fake
                            result: [{
                                "lat": 27.846710259332895,
                                "lon": -82.8245715277867,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "St George Island Gulfside"
                            }, {
                                "lat": 27.846710259332895,
                                "lon": -82.8245715277867,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "St George Island Gulfside"
                            }, {
                                "lat": 27.846710259332895,
                                "lon": -82.8245715277867,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "St George Island Gulfside"
                            }, {
                                "lat": 27.846710259332895,
                                "lon": -82.8245715277867,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "St George Island Gulfside"
                            }, {
                                "lat": 27.856119029523747,
                                "lon": -82.79868040275704,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Clearwater Beach"
                            }, {
                                "lat": 27.856119029523747,
                                "lon": -82.79868040275704,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Clearwater Beach"
                            }, {
                                "lat": 27.641239095158284,
                                "lon": -82.65700357797384,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Fort Desoto"
                            }, {
                                "lat": 27.53831691727592,
                                "lon": -82.71983543159806,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Coquina Beach"
                            }, {
                                "lat": 27.41189282609304,
                                "lon": -82.64597798880483,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Coquina Beach"
                            }, {
                                "lat": 27.365269189840433,
                                "lon": -82.58401657637393,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Lido Key"
                            }, {
                                "lat": 27.19846062475586,
                                "lon": -82.51230922429562,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Siesta Key"
                            }, {
                                "lat": 27.796958037720337,
                                "lon": -97.41338443465365,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Venice Beach"
                            }, {
                                "lat": 27.02256545358136,
                                "lon": -82.42743719762771,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Manasota Beach"
                            }, {
                                "lat": 26.770897868772387,
                                "lon": -82.30002260406228,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "GI State Park(South Lighthouse)"
                            }, {
                                "lat": 26.5105598881974,
                                "lon": -82.0736628496584,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Vanderbilt Beach"
                            }, {
                                "lat": 26.5105598881974,
                                "lon": -82.0736628496584,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "Vanderbilt Beach"
                            }, {
                                "lat": 25.9704420717195,
                                "lon": -81.76950365402851,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "South Marco Beach"
                            }, {
                                "lat": 25.9704420717195,
                                "lon": -81.76950365402851,
                                "UVLevel": "none",
                                "SeaSpeedLeveL": "none",
                                "time": 1495497600000,
                                "HABLevel": "high",
                                "dangerLevel": "high",
                                "name": "South Marco Beach"
                            }]
                        })
                    })

                }

            })
    },
    getBeachDangerLevelinHour: function(req, res) {
        var time = req.param('time')
        var day = ToolService.formatTimeStampMinus(time);
        time = day.valueOf();
        var lat = req.param('lat')
        var lon = req.param('lon')
        ToolService.getDangerLevelinHour(lat, lon, time).then(
            function(resolve) {
                return res.json({
                    result: resolve
                })
            })
    },
    getBeachDangerLevelinMonth: function(req, res) {
        var year = req.param('year')
        var month = req.param('month')
        var lat = req.param('lat')
        var lon = req.param('lon')
        ToolService.getDangerLevelinMonth(lat, lon, year, month).then(
            function(resolve) {
                return res.json({
                    result: [{
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491004800000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 7,
                            Wind: 5,
                            Humidity: 0.5940770692661064,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491091200000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 8,
                            Wind: 2,
                            Humidity: 0.6684804235893436,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491177600000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 2,
                            Wind: 5,
                            Humidity: 0.12430931754001495,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491264000000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 0,
                            Wind: 1,
                            Humidity: 0.6323481224214562,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491350400000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 9,
                            Wind: 0,
                            Humidity: 0.17208086109514853,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491436800000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 0,
                            Wind: 6,
                            Humidity: 0.06490832598647356,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491523200000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 2,
                            Wind: 2,
                            Humidity: 0.016082523313146524,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491609600000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 0,
                            Wind: 9,
                            Humidity: 0.10401043192750192,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491696000000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 5,
                            Wind: 8,
                            Humidity: 0.27930390534620075,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491782400000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 9,
                            Wind: 5,
                            Humidity: 0.05108517106690558,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491868800000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 9,
                            Wind: 6,
                            Humidity: 0.10016666570494914,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1491955200000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 5,
                            Wind: 0,
                            Humidity: 0.8744762638098369,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492041600000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 5,
                            Wind: 0,
                            Humidity: 0.3455514689251933,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492128000000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 7,
                            Wind: 9,
                            Humidity: 0.29395244805038545,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492214400000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 6,
                            Wind: 7,
                            Humidity: 0.12582491696125553,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492300800000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 5,
                            Wind: 1,
                            Humidity: 0.5553349220292063,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492387200000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 3,
                            Wind: 0,
                            Humidity: 0.8740947387070368,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492473600000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 0,
                            Wind: 5,
                            Humidity: 0.05116148039330737,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492560000000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 8,
                            Wind: 4,
                            Humidity: 0.546777726742093,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492646400000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 7,
                            Wind: 5,
                            Humidity: 0.23550884806282646,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492732800000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 4,
                            Wind: 1,
                            Humidity: 0.22688215557980018,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492819200000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 5,
                            Wind: 4,
                            Humidity: 0.3172472183932722,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492905600000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 2,
                            Wind: 8,
                            Humidity: 0.2235871108660077,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1492992000000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 8,
                            Wind: 8,
                            Humidity: 0.7412048368359041,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1493078400000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 3,
                            Wind: 8,
                            Humidity: 0.6971294353396067,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1493164800000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 5,
                            Wind: 0,
                            Humidity: 0.30051150304640717,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1493251200000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 9,
                            Wind: 1,
                            Humidity: 0.7251951307975455,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1493337600000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 9,
                            Wind: 7,
                            Humidity: 0.5571853763156935,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1493424000000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 5,
                            Wind: 8,
                            Humidity: 0.2570513536942758,
                            Weather: 'cloud'
                        }
                    }, {
                        name: 'Pensacola Beach',
                        picture: 'https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg',
                        time: 1493510400000,
                        lat: '30.349849',
                        lon: '-87.068563',
                        UVLevel: 'none',
                        SeaSpeedLeveL: 'none',
                        HABLevel: 'high',
                        dangerLevel: 'high',
                        weaher: {
                            UVI: 3,
                            Wind: 3,
                            Humidity: 0.7681498733111409,
                            Weather: 'cloud'
                        }
                    }]
                })
            })
    },

};