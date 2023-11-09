$(function () {



  var swiper = new Swiper(".ticket-swiper", {

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // var swiper2 = new Swiper(".view-swiper", {
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });


  $(".ticket-plan .count .select").on("click", function(){
    $(this).parent().find("ul").toggleClass("on");
  });

  $(".ticket-plan .count ul button").on("click", function(){
    $(".ticket-plan .count .select span").text($(this).html());
    $(".ticket-plan .count ul").removeClass("on");
  });



});



/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();

$(window).on('resize', function () {
  windowh = $(window).height();
  windowW = $(window).width();
});

