var HABDatas = require('./HABData.json');
var beachDatas = require('../../../assets/json/beach.json')
var moment = require('moment');
var startTimeStamp = moment
    .utc('2016-04-01')
    .valueOf();
var endTimeStamp = moment
    .utc('2017-04-30')
    .valueOf();
var dailyTimeStamp = 86400000
var hourlyTimeStamp = 1000 * 60 * 60
var nearestArr = {};
var completeData = [];
var fs = require('fs');
var completeDataStream = fs.createWriteStream('completeData.json')

function processHABData() {
    beachDatas.forEach(function(beachData) {
        console.log(beachData);
        let beachNearLocation = [];
        HABDatas.forEach(function(HABData) {
            let tempDist = (beachData.lat - HABData.lat) * (beachData.lat - HABData.lat) + (beachData.lon - HABData.lon) * (beachData.lon - HABData.lon)

            if (tempDist < 0.15) {
                let duplicate = false
                for (var index in beachNearLocation) {
                    if (HABData.lon == beachNearLocation[index].lon && HABData.lat == beachNearLocation[index].lat) {
                        duplicate = true
                    }
                }
                if (duplicate == false)
                    beachNearLocation.push(HABData)
            }
        })
        nearestArr[beachData.name] = beachNearLocation
    });
    //store each beach nearby Observatory


    for (var key in nearestArr) {
        console.log(key + " : " + nearestArr[key].length)
    }
    var timeCounter = 0;
    for (let i = startTimeStamp; i <= endTimeStamp; i += dailyTimeStamp) {
        console.log(i)
        HABDatas.forEach(function(HABData) {
            if (HABData.time == i) {
                timeCounter++;
                console.log('yes')
            }
        })
    }
    console.log(timeCounter)
    beachDatas.forEach(function(beachData) {

        for (var i = startTimeStamp; i <= endTimeStamp; i += dailyTimeStamp) {

            let highestLevel = "none";

            nearestArr[beachData.name].forEach(function(nearLoaction) {

                HABDatas
                    .forEach(function(HABData) {
                        if (nearLoaction.lon == HABData.lon && nearLoaction.lat == HABData.lat && i == HABData.time) {
                            if (HABData.HABLevel == "high")
                                if (HABData.HABLevel != "none") {
                                    if (highestLevel != "high" && HABData.HABLevel == "mid") {
                                        highestLevel = "mid";
                                    } else if ((highestLevel == "mid" || highestLevel == "none") && HABData.HABLevel == "high") {
                                        highestLevel = "high";
                                    }
                                }
                        }
                    })
            })
            completeData.push({
                lon: beachData.lon,
                lat: beachData.lat,
                name: beachData.name,
                picture: beachData.picture,
                HABLevel: highestLevel,
                time: i
            })
        }
    })
    console.log("there are " + completeData.length + "data in the completeData")

    completeDataStream.write(JSON.stringify(completeData))
}

module.exports = processHABData