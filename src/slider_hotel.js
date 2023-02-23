const images = document.querySelectorAll(
  '.hotel__slider .hotel-slider__box img'
);
const sliderLine = document.querySelector('.hotel__slider .hotel-slider__box');
let count = 0;
let width;

function init() {
  console.log('resize');
  width = document.querySelector('.hotel__slider').offsetWidth;

  images.forEach(item => {
    width = document.querySelector('.hotel__slider').offsetWidth;

    if (width < 547 && width > 427) {
      item.style.marginLeft = '40' + 'px';
      item.style.width = '194' + 'px';
      item.style.boxShadow = `2px 2px 60px rgba(0, 0, 0, 0.25)`;
    } else if (width < 427) {
      item.style.marginLeft = '25' + 'px';
      item.style.width = '245' + 'px';
      item.style.boxShadow = `2px 2px 60px rgba(0, 0, 0, 0.25)`;
    } else if (width > 547) {
      item.style.width = '254' + 'px';
      item.style.marginLeft = '40' + 'px';
      item.style.boxShadow = `2px 2px 60px rgba(0, 0, 0, 0.25)`;
    }
  });
  rollSlider();
  rollSliderT();
  rollSliderM();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function (e) {
  e.preventDefault();
  count++;
  if (count >= images.length - 1) {
    count = 0;
  }
  rollSlider();
  rollSliderT();
  rollSliderM();
});

document.querySelector('.slider-prev').addEventListener('click', function (e) {
  e.preventDefault();
  count--;
  if (count < 0) {
    count = images.length - 2;
  }
  rollSlider();
  rollSliderT();
  rollSliderM();
});

function rollSlider() {
  if (width > 547) {
    sliderLine.style.transform = 'translate(-' + (count * width) / 1.86 + 'px)';
  }
}

function rollSliderM() {
  if (width < 427) {
    sliderLine.style.transform = 'translate(-' + (count * width) / 1.45 + 'px)';
  }
}

function rollSliderT() {
  if (width < 547 && width > 427) {
    sliderLine.style.transform = 'translate(-' + (count * width) / 1.82 + 'px)';
  }
}
