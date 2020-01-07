// header menu 
$(".header__burger").click(function(){
    $(".header__burger, .menu__list").toggleClass("active");
  }) ;

// color active link
var nav = $(".menu__item .menu__link");
nav.click(function() {
    nav.removeClass("active__link");
    $(this).addClass('active__link');
});
// nav.on('click', function(event) {
//   event.preventDefault();
//   this = 
// });

 // transition link
$(document).ready(function(){
	$(".menu").on("click",".menu__link", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
      top = $(id).offset().top;
      console.log(top);
    $('body,html').animate({scrollTop: top}, 500);
    
	});
});

  // owl-carousel
  $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          items: 1,
          autoplay: true,
          navText: [
              '<span class="arrow-owl arrow-left"><i class="fas fa-chevron-left"></i></span>',
              '<span class="arrow-owl arrow-right"><i class="fas fa-chevron-right"></i></span>'
            ]
      });
    });
    
    // image zoom
    $(".large__img").click(function() {
      let img = $(this);
      let src = img.attr("src");
      $(".program .container-fluid").append("<div class='zoom-container'>"+
                                              "<div class='zoom'>"+
                                                // "<span class='close'></span>"+
                                                // "<img src="+src+">"+
                                                  "<img src='../app/img/yg1.png'>"+
                                                "</div>"+
                                              "</div>");
                                            // $("body").css("opacity", "0.3");
                                            $(".close").css("display", "block");
                                            $(".zoom-container").css("pointer-events", "none");
                                            // $(".zoom").fadeIn(800); 
                                            $(".zoom").css("transition", "1s ease-out 0.5s");
                                            // $(".program").css("pointer-events", "none");
    });

    $(".close").click(function() {
      $(".close").css("display", "none");
      $(".zoom").remove();
      // $("zoom-container").css("background", "none");
  
    })
    
