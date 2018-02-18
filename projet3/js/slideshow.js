class Slideshow {
  constructor(currentSlide, sliderImages, arrowLeft, arrowRight) {
    this.currentSlide = currentSlide;
    this.sliderImages = sliderImages;
    this.arrowLeft = arrowLeft;
    this.arrowRight = arrowRight;
  }
}

var slideshow = new Slideshow(0, document.querySelectorAll(".slide"), document.querySelector("#arrow-left"), document.querySelector("#arrow-right"));

function reset() {
  for (i = 0; i < slideshow.sliderImages.length; i++) {
    slideshow.sliderImages[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  slideshow.sliderImages[0].style.display = "block";
}

function slideLeft() {
  reset();
  slideshow.sliderImages[slideshow.currentSlide - 1].style.display = "block";
  slideshow.currentSlide--;
}

function slideRight() {
  reset();
  slideshow.sliderImages[slideshow.currentSlide + 1].style.display = "block";
  slideshow.currentSlide++;
}

slideshow.arrowLeft.addEventListener("click", function () {
  if (slideshow.currentSlide === 0) {
    slideshow.currentSlide = slideshow.sliderImages.length;
  }
  slideLeft();
})

slideshow.arrowRight.addEventListener("click", function () {
  if (slideshow.currentSlide === slideshow.sliderImages.length - 1) {
    slideshow.currentSlide = -1;
  }
  slideRight();
})

startSlide();





// class Slideshow {
//   constructor(slides, currentSlide, hideSlide, lastSlide, previousSlide, nextSlide, prevButton, nextButton) {
//     this.slides = slides;
//     this.currentSlide = currentSlide;
//     this.hideSlide = hideSlide;
//     this.lastSlide = lastSlide;
//     this.previousSlide = previousSlide;
//     this.nextSlide = nextSlide;
//     this.prevButton = prevButton;
//     this.nextButton = nextButton;
//   }
//   displaySlide() {
//     this.currentSlide.css("opacity", "100%")
//   }
//   hideSlides() {
//     this.slides.css("opacity", "0")
//   }
//   previousSlide() {
//     this.currentSlide = 0;
//     this.previousSlide = this.currentSlide - 1;
//   }
//   nextSlide() {
//     this.currentSlide = 0;
//     this.nextSlide = this.currentSlide + 1;
//   }
//   currentSlide() {

//   }

//   nextButton() {

//   }
// }

// this.slides = document.getElementsByClassName("mySlides");
// this.prevButton = document.getElementsByClassName("prev");
// this.nextButton = document.getElementsByClassName("next");
// $(slides).css("opacity", "0");
// $(".slide1").css("opacity", "100");

// i = 0

// $(nextButton).on("click", function () {
//   i++
//   $(slides).css("opacity", "0");
//   $(".slide1").css("opacity", "100");
//   if (i === 0) {
//     $(slides).css("opacity", "0");
//     $(".slide1").css("opacity", "100");
//   }
//   if (i === 1) {
//     $(slides).css("opacity", "0");
//     $(".slide2").css("opacity", "100");
//   }
//   if (i === 2) {
//     $(slides).css("opacity", "0");
//     $(".slide3").css("opacity", "100");
//   }
//   if (i === 3) {
//     $(slides).css("opacity", "0");
//     $(".slide4").css("opacity", "100");
//   }
//   if (i >= 4) {
//     i = 0;
//   }
// });

// $(prevButton).on("click", function () {
//   i--
//   if (i === 0) {
//     $(slides).css("opacity", "0");
//     $(".slide1").css("opacity", "100");
//   }
//   if (i === 1) {
//     $(slides).css("opacity", "0");
//     $(".slide2").css("opacity", "100");
//   }
//   if (i === 2) {
//     $(slides).css("opacity", "0");
//     $(".slide3").css("opacity", "100");
//   }
//   if (i === 3) {
//     $(slides).css("opacity", "0");
//     $(".slide4").css("opacity", "100");
//   }
//   if (i <= 0) {
//     i = 4;
//   }
// });




// $(".demarrer").on("click", function () {
//   $("#bienvenue").slideUp();
// });





// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }