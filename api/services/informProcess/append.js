var slicedData = require('./slicedData.json');
var foreacastData = require('./forecast.json')
var moment = require('moment')
var nowDate;
var DayIndex;
var testStream = require('fs').createWriteStream('../../../assets/json/db.json')
var locationCount = 0
var locationTemp;

function appendData() {
    slicedData
        .forEach(function (inform, informIndex) {
            if (locationTemp != inform.name) {
                locationTemp = inform.name;
                locationCount = 0;
            }
            let tempDate = moment.utc(inform.time)
            if (tempDate.hour() == 0) {
                locationCount++;
                nowDate = tempDate;
                DayIndex = Math.floor(Math.random() * 1);
                // console.log("random Day " + DayIndex)
                forcastDay = foreacastData[DayIndex]
                // console.log("forcastDay :" + Object.keys(forcastDay).length);
                // console.log("beach Name :" + inform.name)
                for (let i = informIndex; i < informIndex + 24; i++) {
                    // console.log(" !!!!!!!!!!!!!!!!!inform Index is :" + i);
                    // console.log("@@@@@@@@@@@@@@ " + i % 24)
                    slicedData[i].UVLevel = forcastDay[inform.name][i % 24].weather.uv_level;
                    // console.log('UVLevel :' + slicedData[i].UVLevel);
                    slicedData[i].UVI = forcastDay[inform.name][i % 24].weather.uv_index;
                    // console.log('uv_index :' + slicedData[i].UVI);
                    slicedData[i].WindSpeed = forcastDay[inform.name][i % 24].weather.wind_speed
                    console.log('WindSpeed :' + slicedData[i].WindSpeed);
                    slicedData[i].WindSpeedLevel = forcastDay[inform.name][i % 24].weather.wind_speed_level
                    console.log('WindSpeedLevel :' + slicedData[i].WindSpeedLevel);
                    if (slicedData[i].UVLevel == "high" || slicedData[i].HABLevel == "high" || slicedData[i].WindSpeedLevel == "high") {
                        slicedData[i].dangerLevel = "high"
                    } else if (slicedData[i].UVLevel == "mid" || slicedData[i].HABLevel == "mid" || slicedData[i].WindSpeedLevel == "mid") {
                        slicedData[i].dangerLevel = "mid"
                    } else {
                        slicedData[i].dangerLevel = "none"
                    }

                }
                console.log(" 1 turn over")
            }

        });

    console.log(slicedData.length);
    testStream.write(JSON.stringify(slicedData))
}

module.exports = appendData
