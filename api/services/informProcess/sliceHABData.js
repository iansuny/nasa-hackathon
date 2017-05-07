var completeData = require('./completeData.json');
var fs = require('fs');
var sliceStream = fs.createWriteStream('slicedData.json')
var slicedData = []
var hourlyTimeStamp = 1000 * 60 * 60
var dailyTimeStamp = 86400000

function sliceInform() {
    completeData
        .forEach(function (inform) {
            for (let i = inform.time; i < inform.time + dailyTimeStamp; i += hourlyTimeStamp) {
                let newData = JSON.parse(JSON.stringify(inform));
                newData.time = i;
                newData.SeaSpeed = Math
                slicedData.push(newData);
            }
        });

    console.log(slicedData.length);

    sliceStream.write(JSON.stringify(slicedData))
}

module.exports = sliceInform