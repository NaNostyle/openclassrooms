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
//     countdown() {

//         var now = new Date().getTime();
    
   
//         var distance = countDownDate - now;
    
     
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

//         document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    
  
//         if (distance < 0) {
//             clearInterval(x);
//             document.getElementById("demo").innerHTML = "EXPIRED";
//         }
//     }
   
    
       
// }


// var countDown = new CountDown((1000 * 60) * 20, new Date().getTime(), new Date(today + twentyMinutes).getTime(), new Date().getTime(), distance = this.countDownDate - this.now, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), Math.floor((distance % (1000 * 60)) / 1000));
// console.log(countDown);

var twentyMinutes = (1000 * 60) * 20;

var today = new Date().getTime();
var countDownDate = new Date(today + twentyMinutes).getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timeleft").innerHTML = minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeout").innerHTML = "Le délais de réservation de votre vélo à expiré";
    }
}, 1000);