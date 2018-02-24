class CountDown {
    constructor(twentyMinutes, today, countDownDate, now, minutes, seconds) {
        this.twentyMinutes = twentyMinutes;
        this.today = today;
        this.countDownDate = countDownDate;
        this.now = now;
        this.distance = countDownDate - now;
        this.minutes = minutes;
        this.seconds = seconds;
    }
       
}


var countDown = new CountDown((1000 * 60) * 20, new Date().getTime(), new Date(today + twentyMinutes).getTime(), new Date().getTime(), distance = this.countDownDate - this.now, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), Math.floor((distance % (1000 * 60)) / 1000));
console.log(countDown)

var twentyMinutes = (1000 * 60) * 20;
// Set the date we're counting down to
var today = new Date().getTime();
var countDownDate = new Date(today + twentyMinutes).getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);