// input mask

$(document).ready(function () {
  $('#phone-input').inputmask('+38 (999) 999-99-99');
});

$(document).ready(function () {
  $('#client-phone').inputmask('+38 (999) 999-99-99');
});

// custom calendar

$(function () {
  $('#datepicker').datepicker({
    dateFormat: 'dd/mm/yy',
    monthNames: [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
    ],
    dayNamesMin: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
  });
});

$(function () {
  $('#datepicker2').datepicker({
    dateFormat: 'dd/mm/yy',
    monthNames: [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
    ],
    dayNamesMin: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
  });
});

$(function () {
  $('#datepicker3').datepicker({
    dateFormat: 'dd/mm/yy',
    monthNames: [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
    ],
    dayNamesMin: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
  });
});

$(function () {
  $('#datepicker').datepicker();
});

$(function () {
  $('#datepicker2').datepicker();
});

$(function () {
  $('#datepicker3').datepicker();
});

// custom select

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
        //if ($this.children('option').eq(i).is(':selected')){
        //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
        //}
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

var swiper = new Swiper('.swiper-container-hotel', {
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

var swiperRest = new Swiper('.swiper-container-restaurant', {
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

var swiperRoom = new Swiper('.swiper-container-room', {
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

var swiperRoom2 = new Swiper('.swiper-container-room2', {
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

var swiperRoom2l = new Swiper('.swiper-container-room2l', {
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

var swiperRoom3 = new Swiper('.swiper-container-room3', {
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

var swiperKitchen = new Swiper('.swiper-container-kitchen', {
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

var swiperH = new Swiper('.swiper-container-about-hotel', {
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

var swiperAboutRest = new Swiper('.swiper-container-about-rest', {
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
