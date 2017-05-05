module.exports = {

    testAllBeachInform() {
        InformService
            .getAllDangerLevelInHour(1493406000000)
            .then(function (allInform) {
                console.log(allInform)
            })
    },
    testHourInform() {
        InformService
            .getDangerLevelinHour(30.349849, -87.068563, 1493406000000)
            .then(function (res) {
                console.log(res)
            })
    }

}