$(document).ready(function() {
  // easing on scroll to anchor
  $(function() {
    $(".nav_link").click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          var newTarget = target.offset().top - 110;
          $('html,body').animate({
              scrollTop: newTarget
          }, 1000);
          return false;
        }
      }
    });
  });

  // to add background to the menu on scroll
  $(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
        $("#logo_nav_wrapper").addClass("bg");
      } else {
        $("#logo_nav_wrapper").removeClass("bg");
      }
    });
  });

  // toggle menu at small screen
  $("#toggle_btn").click(function(){
    console.log("click");
    $("#nav_menu").toggle();
  });
});
