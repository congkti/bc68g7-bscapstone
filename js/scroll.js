// scroll header fixed
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $("#header").addClass("nav-fixed");
  } else {
    $("#header").removeClass("nav-fixed");
  }
});
