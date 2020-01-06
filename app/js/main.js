// header menu 
$(".header__burger").click(function(){
    $(".header__burger, .menu__list").toggleClass("active");
  }) ;
//   $(document).ready(function(){
//     $('.menu__list .menu__item .menu__link').each(function () {
//             var location = window.location.href;
//             var link = this.href; 
//             if(location == link) {
//                 $(this).addClass('active__link');
//             }
//         });
//     });
// $(function () {
//     var location = window.location.href;
//     var cur_url = '/' + location.split('/').pop();
 
//     $('.menu__list .menu__item').each(function () {
//         var link = $(this).find('a').attr('href');
 
//         if (cur_url == link) {
//             $(this).addClass('active__link');
//         }
//     });
// });
 
$(document).ready(function(){
	$(".menu").on("click",".menu__link", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
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
    