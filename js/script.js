$(function() {

  $('.burger').on('click touchend', function(e) {
    e.stopPropagation();
    e.preventDefault();

    $('.header__menu').toggleClass('header__menu_disable');
  
  });

  // $('.price-item').on('mouseenter touchend', function(e) {
  //
  //   if ($(this).hasClass('price-item_active')) {
  //     $(this).removeClass('price-item_active')
  //   } else {
  //     $(this).addClass('price-item_active');
  //   }
  // });

  $('.screenshots__content').slick({
    //adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    focusOnSelect: true,

    speed: 800,
    easing: 'ease',
    waitForAnimate: false,

    //arrows: false,

    nextArrow: '.screenshots__next-button',
    prevArrow: '.screenshots__previous-button',

    responsive: [{
        breakpoint: 1200, // максимальная ширина экрана
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          //arrows: true,
        }
      },
      {
        breakpoint: 767, // максимальная ширина экрана
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],

  });

});
