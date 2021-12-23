"use strict";

//=require ../blocks/**/*.js
$(document).ready(function () {
  // open modal
  $('.js-open-swap').click(function () {
    $('.js-modal-swap').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('overflov');
  }); //close modal

  $('.js-mask, .js-modal-close').click(function () {
    $('.js-modal').fadeOut();
    $('.js-mask').fadeOut();
    $('body').removeClass('overflov');
  }); //swiper

  var wiperAboutSmallg = new Swiper('.js-about-small', {
    slidesPerView: 3,
    spaceBetween: 12,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 6,
        spaceBetween: 16
      }
    }
  });
  var wiperAboutBig = new Swiper('.js-about-big', {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: wiperAboutSmallg
    }
  }); // smoth scroll

  $('.scroll-link').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700);
    }
  });
});