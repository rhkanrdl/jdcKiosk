$(function () {



  var swiper = new Swiper(".ticket-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".view-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



});



/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();

$(window).on('resize', function () {
  windowh = $(window).height();
  windowW = $(window).width();
});

