
$(document).ready(function() {
  $(".callback-btn").removeClass("callback-btn-hidden")
  $(".main").on("click",function(){
    $(".basket-content").addClass("basket-hidden")
    $(".callback-btn").removeClass("callback-btn-hidden")
    $("body").css({"overflow":"auto"})
  })

  var readmoreConfig = {
    maxHeight: 500,
    collapsedHeight: 270,
    speed: 100,
    moreLink: '<a class="more-text" href="#">Подробнее</a>',
    lessLink: '<a class="more-text" href="#">Скрыть</a>'
}
  $('.advant__content').readmore(readmoreConfig);
  
  $(window).scroll(function() {
    myFunctionBorderer();
   
    var height = $(window).scrollTop();
         /*Если сделали скролл на 100px задаём новый класс для header*/
    if(height > 60){
      $('.header__mid').addClass('header-fixed');
      $(".wrapper .header__mid .basket-content").css("top", "65px")
      $(".wrapper .header__mid-min-view").css("top", "60px")
      
      if($(window).width() > 992 ){  
        $(".wrapper .header__mid .basket-content").css("top", "65px")
        $(".wrapper .header__mid-min-view").css("top", "60px")
      } 
     // $("#logo-mid").removeClass("logo-mid-invisible")
      } else{
          /*Если меньше 60px удаляем класс для header*/
      $('.header__mid').removeClass('header-fixed');
      if($(window).width() < 992 ){  
        $(".wrapper .header__mid .basket-content").css("top", "105px")
        $(".wrapper .header__mid-min-view").css("top", "100px")
      } else{
        $(".wrapper .header__mid .basket-content").css("top", "145px")
        $(".wrapper .header__mid-min-view").css("top", "140px")
      }
     
      //$("#logo-mid").addClass("logo-mid-invisible")
      }
    });

    $(".mybtn-basket").on("click", function(e){
      e.preventDefault();
      console.log(this)
      $(".basket-content").toggleClass("basket-hidden")
      $(".header__mid-menu").removeClass("active-mob");
      $(".header__mid-min-view").removeClass("active-mob");
      $(".nav-mobile").removeClass("active");
      $(".callback-btn").toggleClass("callback-btn-hidden");

      if($(window).width() < 768 ){  
        $("body").css({"overflow":"hidden"})
      } 
     
    })


    $('.slider__promo').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      adaptiveHeight: true
    });
  
  $('.actions__slider').slick({
      dots: false,
      infinite: true,
      arrows:true,
      speed: 500,
      slidesToShow: 4,
      autoplay: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3

          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2

          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            
          }
        }
        ]
    });
    $('.together__slider').slick({
      dots: false,
      infinite: true,
      arrows:true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2

          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            
          }
        }
        ]
    });

 
    
  
    function myFunctionBorderer() {
      if($(window).width() < 992 && $(window).width() > 767){   
          $(".my-custom-border").removeClass("bordered");
      } else {
          $(".my-custom-border").addClass("bordered");
      }
    }
    function readmoreManipulation() {

    }


  

  $(".nav-mobile").on("click",topMenuManipulation);
  function topMenuManipulation(){
    $(".header__mid-menu").toggleClass("active-mob");
    $(".header__mid-min-view").toggleClass("active-mob");
    $(".nav-mobile").toggleClass("active");
    $(".basket-content").addClass("basket-hidden")
    $("body").css({"overflow":"auto"})
    
  }
  $("#clientPhone").mask("+3(8099)999-99-99");

  //new WOW().init();

  var count = 0;

  $(".count-up").on("click",addCount);
  function addCount(e){
    e.preventDefault();
    count = 1;
    console.log(count);
   
    
      $(this).addClass("display-none");
      $(this).parent().children(".math-block").removeClass("display-none")
      $(this).parent().find(".my-quantity").html(count)
    
  }

  $(".minus-quantity").on("click",decrementCount)
  function decrementCount(){
    count--;
    if(count < 1){
      $(this).parent().addClass("display-none");
      $(this).parent().parent().children(".count-up").removeClass("display-none")
      count = 0;
      $(".my-quantity").html(count)
    }
    $(".my-quantity").html(count)
    
  }

  $(".plus-quantity").on("click",incrementCount)
  function incrementCount(){
    count++;
    if(count > 99){
      count = 99;
      $(".my-quantity").html(count)
    }
    $(".my-quantity").html(count)
  }

});


