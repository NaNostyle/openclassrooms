// a utiliser a utiliser dans le main
$(".demarrer").on("click", function () {
  $("#bienvenue").slideUp();
});

class Slideshow {
  constructor(currentSlide, sliderImages, arrowLeft, arrowRight) {
    this.currentSlide = currentSlide;
    this.sliderImages = sliderImages;
    this.arrowLeft = arrowLeft;
    this.arrowRight = arrowRight;

    this.listenKeyboardEvents();
    this.startSlide();
    this.previous();
    this.next();
  }

  reset() {
    for (var i = 0; i < this.sliderImages.length; i++) {
      this.sliderImages[i].style.opacity = "0";
    }
  }

  startSlide() {
    this.reset();
    this.sliderImages[0].style.opacity = "1";
  }

  slideLeft() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.sliderImages.length;
    }
    this.reset();
    this.sliderImages[this.currentSlide - 1].style.opacity = "1";
    this.currentSlide--;
  }

  slideRight() {
    if (this.currentSlide === this.sliderImages.length - 1) {
      this.currentSlide = -1;
    }
    this.reset();
    this.sliderImages[this.currentSlide + 1].style.opacity = "1";
    this.currentSlide++;
  }

  previous() {
    this.arrowLeft.addEventListener("click", () => {
      this.slideLeft();
    });
  }

  next() {
    this.arrowRight.addEventListener("click", () => {
      this.slideRight();
    });
  }

  listenKeyboardEvents() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == '37') {
        this.slideLeft();
      } else if (e.keyCode == '39') { 
        this.slideRight();
      }
    });
  }
}



// class Slideshow {
//   constructor(currentSlide, sliderImages, arrowLeft, arrowRight) {
//     this.currentSlide = currentSlide;
//     this.sliderImages = sliderImages;
//     this.arrowLeft = arrowLeft;
//     this.arrowRight = arrowRight;

//     this.listenKeyboardEvents();
//     this.startSlide();
//     this.previous();
//     this.next();
//   }

//   reset() {
//     for (var i = 0; i < this.sliderImages.length; i++) {
//       this.sliderImages[i].style.opacity = "0";
//     }
//   }

//   startSlide() {
//     this.reset();
//     this.sliderImages[0].style.opacity = "1";
//   }

//   slideLeft() {
//     this.reset();
//     this.sliderImages[this.currentSlide - 1].style.opacity = "1";
//     this.currentSlide--;
//   }

//   slideRight() {
//     this.reset();
//     this.sliderImages[this.currentSlide + 1].style.opacity = "1";
//     this.currentSlide++;
//   }

//   previous() {
//     this.arrowLeft.addEventListener("click", () => {
//       if (this.currentSlide === 0) {
//         this.currentSlide = this.sliderImages.length;
//       }
//       this.slideLeft();
//     });
//   }

//   next() {
//     this.arrowRight.addEventListener("click", () => {
//       if (this.currentSlide === this.sliderImages.length - 1) {
//         this.currentSlide = -1;
//       }
//       this.slideRight();
//     });
//   }

//   listenKeyboardEvents() {
//     document.addEventListener("keydown", (e) => {
//       if (e.keyCode == '37') {
//         if (this.currentSlide === 0) {
//           this.currentSlide = this.sliderImages.length;
//         }
//         this.slideLeft();
//       } else if (e.keyCode == '39') {
//         if (this.currentSlide === this.sliderImages.length - 1) {
//           this.currentSlide = -1;
//         }
//         this.slideRight();
//       }
//     });
//   }
// }













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
//   opacitySlide() {
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