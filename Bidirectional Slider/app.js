const sliderContainer = document.querySelector(".slider");
const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");
const downBtn = document.querySelector(".down-btn");
const upBtn = document.querySelector(".up-btn");
const slideLength = document.querySelectorAll(".right-slide").length;

let currentSlideIdx = 0;

leftSlider.style.top = `-${(slideLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

function changeSlide(slideOrder) {
  const sliderHeight = sliderContainer.clientHeight;
  if (slideOrder === "up") {
    currentSlideIdx++;
    if (currentSlideIdx > slideLength - 1) {
      currentSlideIdx = 0;
    }
  } else {
    currentSlideIdx--;
    if (currentSlideIdx < 0) {
      currentSlideIdx = slideLength - 1;
    }
  }
  leftSlider.style.transform = `translateY(${
    currentSlideIdx * sliderHeight
  }px)`;
  rightSlider.style.transform = `translateY(-${
    currentSlideIdx * sliderHeight
  }px)`;
}
