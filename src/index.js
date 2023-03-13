import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
flatpickr('.calendar', {
  shorthandCurrentMonth: true,
  enableTime: true,
  time_24hr: true,
  dateFormat: "d-m-Y H:i",
  maxDate: '31-12-2023',
  locale: {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      longhand: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'],         
    }, 
    months: {
      shorthand: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жов', 'Лист', 'Груд'],
      longhand: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
    },
  },
});

import customSelect from 'custom-select';
customSelect('.custom-select');

// input mask

$(document).ready(function () {
  $('#phone-input').inputmask('+38 (999) 999-99-99');
});

$(document).ready(function () {
  $('#client-phone').inputmask('+38 (999) 999-99-99');
});

// modals

const openBtn = document.getElementsByClassName('open');
const closeBtn = document.getElementsByClassName('close');
Array.from(closeBtn, closeButton => {
  closeButton.addEventListener('click', el => {
    let btnId = el.target.getAttribute('data-id');
    document.getElementById(btnId).classList.add('is-hidden');
    document.body.classList.remove('modal-open');
  });
});
Array.from(openBtn, openButton => {
  openButton.addEventListener('click', e => {
    let modalId = e.target.getAttribute('data-id');
    document.getElementById(modalId).classList.remove('is-hidden');
    document.body.classList.add('modal-open');
  });
});

// swiper

const swiper = new Swiper('.swiper-container-hotel', {
  slidesPerView: 1.2,
  leftSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 20,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
  breakpoints: {
    414: {
      slidesPerView: 1.34,
    },
    // when window width is >= 320px
    1024: {
      slidesPerView: 2.16,
      spaceBetween: 34,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2.46,
      spaceBetween: 86,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});

const swiperRest = new Swiper('.swiper-container-restaurant', {
  slidesPerView: 1.35,
  leftSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 20,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev-r',
    prevEl: '.swiper-button-next-r',
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2.16,
      spaceBetween: 34,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2.46,
      spaceBetween: 86,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});

const swiperRoom = new Swiper('.swiper-container-room', {
  slidesPerView: 1,
  // leftSlides: true,
  slideToClickedSlide: true,
  // spaceBetween: 10,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev-rh',
    prevEl: '.swiper-button-next-rh',
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 1,
      // spaceBetween: 34,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 1,
      // spaceBetween: 86,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});

const swiperRoom2 = new Swiper('.swiper-container-room2', {
  slidesPerView: 1.47,
  // leftSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 10,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev-r2',
    prevEl: '.swiper-button-next-r2',
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});

const swiperRoom2l = new Swiper('.swiper-container-room2l', {
  slidesPerView: 1.47,
  // leftSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 10,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev-r2l',
    prevEl: '.swiper-button-next-r2l',
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});

const swiperRoom3 = new Swiper('.swiper-container-room3', {
  slidesPerView: 1.47,
  // leftSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 10,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev-r3',
    prevEl: '.swiper-button-next-r3',
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});

const swiperKitchen = new Swiper('.swiper-container-kitchen', {
  slidesPerView: 1.32,
  // leftSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 24,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev-k',
    prevEl: '.swiper-button-next-k',
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});

const swiperH = new Swiper('.swiper-container-about-hotel', {
  slidesPerView: 1.25,
  // leftSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 20,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev-ah',
    prevEl: '.swiper-button-next-ah',
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});

const swiperAboutRest = new Swiper('.swiper-container-about-rest', {
  slidesPerView: 1.32,
  // leftSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 24,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev-ar',
    prevEl: '.swiper-button-next-ar',
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});