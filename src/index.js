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
      longhand: ['Неділя', 'Понеділок', 'Вівторок', 'ССереда', 'Четвер', 'Пятниця', 'Субота'],         
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
