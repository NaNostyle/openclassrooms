window.addEventListener("DOMContentLoaded", function(){
    new Slideshow(0, document.querySelectorAll(".slide"), document.querySelector("#arrow-left"), document.querySelector("#arrow-right"));

    new Canvas(document.getElementById("canvas"), 4, false, document.getElementById("canvas").getContext("2d"), canvas.getBoundingClientRect().y, canvas.getBoundingClientRect().x);
});