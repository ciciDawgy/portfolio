const egypt = document.querySelector('.egypt');
const fade = document.querySelector('.fade');  // opacity goes from 0 to 1
const earth = document.querySelector('.earth'); // highlights current location
let sliderImages = document.querySelectorAll(".mySlides");
let arrowLeft = document.querySelector(".fa-chevron-left");
let arrowRight = document.querySelector(".fa-chevron-right");
let current = 0;

//Make it an option to do slider or slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  for (i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > sliderImages.length) {slideIndex = 1}
  sliderImages[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 17000); // Change image every 2 seconds
}

    
  //https://developers.google.com/youtube/iframe_api_reference

  //https://www.youtube.com/watch?v=0VVJSvlUgtg&t=2s

  //Slideshow
  //https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/ 


// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();


/*
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
setTimeout(showSlides, 17000); // Change image every 2 seconds
*/



