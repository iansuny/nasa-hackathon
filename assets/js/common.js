function init() { commonfunc(); }

var countdownid;

function commonfunc() {

    countdownid = setTimeout(commonfunc, 1000);
    console.log("hi")
}