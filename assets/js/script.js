$(document).ready(function(){
    console.log("ready!");
  $(window).scroll(function () {
      if ($("#navbar").offset().top > 56) {
          $("#navbar").addClass("navbar-color");
      } else {
          $("#navbar").removeClass("navbar-color");
      }
  });
});