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
