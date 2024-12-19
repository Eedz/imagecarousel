// function that creates a div containing:
// button
// div with menu items (links?)
import "./styles.css";

const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

const images = document.querySelectorAll('.carousel-track img');
const imageWidth = images[0].clientWidth;

nextButton.addEventListener('click', () => {
  console.log(currentIndex);
  if (currentIndex < images.length - 1) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }
});
