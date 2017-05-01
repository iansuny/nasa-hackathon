/**
 * BeachController
 *
 * @description :: Server-side logic for managing beaches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var allBeachData = [{
    "lat": "30.349849",
    "lon": "-87.068563",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "St George Island Gulfside",
    "picture": "https://www.okinawatraveler.net/share/shop/202/zh/shop_image_202.jpg"
}, {
    "lat": "30.424803",
    "lon": "-86.609404",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "St George Island Gulfside",
    "picture": "http://www.guitaipei.com/wp-content/uploads/2015/04/%E6%B5%B7%E7%81%98.png"
}, {
    "lat": "30.383478",
    "lon": "-86.443851",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "St George Island Gulfside",
    "picture": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMWOdvZA0yubZf4vsQTFP5JMCb" +
        "G2v9y7aGgvGlN5hlCeM1TbgV"
}, {
    "lat": "29.643183",
    "lon": "-84.901268",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "St George Island Gulfside",
    "picture": "http://1.bp.blogspot.com/-CEMUW0emw1c/VBLXq1sGDLI/AAAAAAAADco/e1hh_G99KzE/s1600/" +
        "_8260302.JPG"

}, {
    "lat": "28.031805",
    "lon": "-82.819805",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "Clearwater Beach",
    "picture": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaFP4RrU5vo7nCN2ak6984XRhV" +
        "3JCDD7T1N3KooR7B5dsVAJh98g"
}, {
    "lat": "27.978431",
    "lon": "-82.825990",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "Clearwater Beach",
    "picture": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvVH5hh2oP2kMbjbZIG4Z3N14Y" +
        "1rWY0aLDLosCSrTjDhpAL_sP"

}, {
    "lat": "27.645730",
    "lon": "-82.716803",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "Fort Desoto",
    "picture": "https://c1.staticflickr.com/3/2927/33365042592_421f3553a5_h.jpg"

}, {
    "lat": "27.497341",
    "lon": "-82.712548",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "Coquina Beach",
    "picture": "http://blog.udn.com/community/img/PSN_PHOTO/start8588/f_4264954_1.jpg"
}, {
    "lat": "27.451576",
    "lon": "-82.692195",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "Coquina Beach",
    "picture": "https://c1.staticflickr.com/3/2865/33365045432_997328c6da_h.jpg"
}, {
    "lat": "27.311964",
    "lon": "-82.576448",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "Lido Key",
    "picture": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzaUCN_-pl-eAj2Iq7gyoJWoIg" +
        "4MoTZLtgMatRDplvCWV0ozjc"
}, {
    "lat": "27.263529",
    "lon": "-82.544895",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "Siesta Key",
    "picture": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRg-UDgaJX33RSeUlz4k3J2nmal" +
        "qN6q2Z1FyKcp1yrQ1jqPzSNRww"
}, {
    "lat": "33.978543",
    "lon": "-118.459484",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "Venice Beach",
    "picture": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQqbSziFeSQMckiQhL4kYanUy5b" +
        "L-MbmXjthXFesbV8Ik_FQOFKkA"
}, {
    "lat": "27.009911",
    "lon": "-82.412357",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "Manasota Beach",
    "picture": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRuD4Z-JkoBM_72u8HUNGV-pZFP" +
        "Z6EIUFGqWKO3eWY6S0t8uLPvhQ"
}, {
    "lat": "26.719139",
    "lon": "-82.260697",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "GI State Park(South Lighthouse)",
    "picture": "http://dvcdn.azureedge.net/Content/ueditor/net/upload1//635713499524010650136178" +
        "3.jpg"
}, {
    "lat": "26.450440",
    "lon": "-82.027375",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "Vanderbilt Beach",
    "picture": "http://icrvb3jy.xinmedia.com/solomo/article/72123/D1271E68-90B7-B6AB-08C3-19CA6A" +
        "C0F626.jpg"
}, {
    "lat": "26.301250",
    "lon": "-81.834495",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "Vanderbilt Beach",
    "picture": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6uBuvhEBqJpahDcz7Mn0kU-j4" +
        "Tc2sqZiyyoduSgYOnE7bhXe2"
}, {
    "lat": "26.253653",
    "lon": "-81.823330",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "South Marco Beach",
    "picture": "http://www.businesstoday.com.tw/images/152123/0CF25958-1121-4025-AB8C-E9D3CB208E" +
        "65"
}, {
    "lat": "25.939219",
    "lon": "-81.731920",
    "UVLevel": "none",
    "SeaSpeedLeveL": "none",
    "time": 1495497600000,
    "HABLevel": "high",
    "dangerLevel": "high",
    "name": "South Marco Beach",
    "picture": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRenMFkad7vQj2pRDVWoMSOuWhv" +
        "EhX089l64gjMKhN749DqajEowg"
}]
var monthData = [{
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'none',
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
    dangerLevel: 'none',
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
    dangerLevel: 'none',
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
    dangerLevel: 'none',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'mid',
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
    dangerLevel: 'none',
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
    dangerLevel: 'none',
    weaher: {
        UVI: 3,
        Wind: 3,
        Humidity: 0.7681498733111409,
        Weather: 'cloud'
    }
}]
var Promise = require('bluebird')
module.exports = {
    getAllBeachDangerLevel: function(req, res) {
        var time = req.param('time')

        console.log("insert time " + new Date(time));
        var day = ToolService.formatTimeStampMinus(time);
        console.log(day)
        time = day.valueOf();
        console.log(time);
        var result = [];
        Beach
            .find({})
            .exec(function(err, beachs) {
                console.log("getAllBeachDangerLevel" + beachs);
                if (err)
                    return res.negotiate(err)
                else {
                    var promiseArr = []
                    for (let beachIndex in beachs) {
                        promiseArr.push(ToolService.getDangerLevelinHour(beachs[beachIndex].lat, beachs[beachIndex].lon, time).then(function(resolve) {
                            result.push(resolve);
                        }))
                    }
                    Promise
                        .all(promiseArr)
                        .then(function() {

                            console.log("all beach danger level" + result)
                            if (result[0] == undefined) {
                                return res.json({
                                    // result: result fake
                                    result: allBeachData
                                })
                            } else {
                                return res.json({
                                    result: result
                                })
                            }

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
        ToolService
            .getDangerLevelinHour(lat, lon, time)
            .then(function(resolve) {
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
        console.log("getBeachDangerLevelinMonth :" + lat + " " + lon);

        ToolService
            .getDangerLevelinMonth(lat, lon, year, month)
            .then(function(resolve) {
                console.log("finish month api");
                if (resolve.monthInfo[0] == undefined) {
                    return res.json({
                        result: monthData
                    });
                } else {
                    return res.json({
                        result: resolve
                    })
                }
            })

    }
};