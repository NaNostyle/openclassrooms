// class CountDown {
//     constructor(twentyMinutes, today, countDownDate, now, minutes, seconds) {
//         this.twentyMinutes = twentyMinutes;
//         this.today = today;
//         this.countDownDate = countDownDate;
//         this.now = now;
//         this.distance = countDownDate - now;
//         this.minutes = minutes;
//         this.seconds = seconds;
//     }
//     startingCountdown() {
//         setInterval(function () {

//             this.now = new Date().getTime();
        
//             this.distance = this.countDownDate - this.now;
        
//             this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//             this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
//             document.getElementById("timeleft").innerHTML = minutes + "m " + seconds + "s ";
        
//             if (distance < 0) {
//                 clearInterval(x);
//                 document.getElementById("timeout").innerHTML = "Le délais de réservation de votre vélo à expiré";
//             }
//         }, 1000);
//     }
// }


// var countDown = new CountDown((1000 * 60) * 20, new Date().getTime(), new Date(this.today + this.twentyMinutes).getTime(), new Date().getTime(), distance = this.countDownDate - this.now, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), Math.floor((distance % (1000 * 60)) / 1000));

// countDown.startingCountdown()

var twentyMinutes = (1000 * 60) * 20;

var today = new Date().getTime();
var countDownDate = new Date(today + twentyMinutes).getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    localStorage.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    localStorage.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timeleft").innerHTML = localStorage.minutes + "m " + localStorage.seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeout").innerHTML = "Le délais de réservation de votre vélo à expiré";
    }
}, 1000);

// Store

// Retrieve
