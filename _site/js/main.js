$(function(){
  //asign variable
  var $body = $("body");
  var $sideBtn = $('.side-menu-btn');
  var $overlay =  $('.overlay');


  var wWidth = $(window).width();
  var descktopWidth = 1024;
  var wHeight = $(window).height();
  var sPosTop = $("body,html").scrollTop() || document.body.scrollTop;
  var sPosBottom = sPosTop + wHeight;


  

  //nav toggle fn
  $("#nav-toggle-triger").hover(function(){
    $(".nav-toggle").slideToggle("slow");
  },function(){
  });


  //btn hover
  // if(wWidth > descktopWidth) {
  //   $(".btn-wrap").parent().hover(function(){
  //       $(this).find(".btn-wrap").addClass("btn-hover");
  //   },function(){
  //     $(this).find(".btn-wrap").removeClass("btn-hover");
  //   });
  // }

  //humberger menue
  $sideBtn.on('click', function () {
     $body.toggleClass('side-open');
     $overlay.on('click', function () {
       $body.removeClass('side-open');
     });
   });

  //fn for hide and show based on scrolling
  //if element doesnt have ".hidden" so that hide element only onece,
  //put pre class depens on type(slid or rotate)
  $.fn.scrollActivate = function(type) {
    return this.each(function(){
      var objectsOffset = $(this).offset().top;
      var rotateItem = $(this).find(".each-items");
      //hide object
      if(!$(this).hasClass("hidden")){
        if(type==="slideIn"){
          var slideHeight = $(this).height();
          $(this).parent().css({"position":"relative","margin-bottom": slideHeight});
          $(this).addClass("slide-pre");
        } else if(type==="rotateIn"){
          rotateItem.each(function(){
            rotateItem.addClass("rotate-pre");
          });
        }
        $(this).addClass("hidden");
      }
      //show object
      // if element comes certain position,
      //element is showing up
      if(sPosBottom > $(this).offset().top + wHeight/2) {

        if(type==="rotateIn" && !rotateItem.hasClass("rotate-in")){
          rotateItem.each(function(i){
        		setTimeout(function(){
        			rotateItem.eq(i).addClass("rotate-in");
        		}, 450 * (i+1));
        	});
        }
      }

      if(sPosBottom > objectsOffset + wHeight/10){
        if(type==="slideIn" && !$(this).hasClass("slide-in")){
          $(this).addClass("slide-in");
        }
      }
    });
  }

  //scrolling activate things
  //whenever user scroll these function is happenning
  $(window).scroll(function(){
    wHeight = $(window).height();
    sPosTop = $("body,html").scrollTop() || document.body.scrollTop;
    sPosBottom = sPosTop + wHeight;

    //home page
    $(".home-about").scrollActivate("rotateIn");
    $(".slide-home-about").scrollActivate("slideIn");
    $(".home-work").scrollActivate("rotateIn");
    $(".sliode-home-work").scrollActivate("slideIn");

    //services page
    // $(".brand").scrollActivate("rotateIn");
    // $(".slide-brand").scrollActivate("slideIn");
    $(".web").scrollActivate("rotateIn");
    $(".slide-web").scrollActivate("slideIn");
    $(".graphic").scrollActivate("rotateIn");
    $(".slide-graphic").scrollActivate("slideIn");
    $(".interior").scrollActivate("rotateIn");
    $(".slide-interior").scrollActivate("slideIn");

    //who we are page
    $(".specializing").scrollActivate("rotateIn");
    //$(".slide-specializing").scrollActivate("slideIn");
    $(".experienced").scrollActivate("rotateIn");
    $(".slide-experienced").scrollActivate("slideIn");
    $(".history").scrollActivate("rotateIn");
    $(".slide-history").scrollActivate("slideIn");

    //testimonials
    $(".tes-sec").scrollActivate("rotateIn");
    $(".slide-tes-left").scrollActivate("slideIn");

    //detail
    $(".detail-rotate-sec-1").scrollActivate("rotateIn");
    $(".detail-slide-sec-1").scrollActivate("slideIn");
    $(".detail-rotate-sec-2").scrollActivate("rotateIn");
    $(".detail-slide-sec-2").scrollActivate("slideIn");
  });

  //------------before user scroll ------------
  //under this is hide element before scroll
  //home page
  $(".home-about").scrollActivate("rotateIn");
  $(".slide-home-about").scrollActivate("slideIn");
  $(".home-work").scrollActivate("rotateIn");
  $(".sliode-home-work").scrollActivate("slideIn");


  //services page
  // $(".brand").scrollActivate("rotateIn");
  // $(".slide-brand").scrollActivate("slideIn");
  $(".web").scrollActivate("rotateIn");
  $(".slide-web").scrollActivate("slideIn");
  $(".graphic").scrollActivate("rotateIn");
  $(".slide-graphic").scrollActivate("slideIn");
  $(".interior").scrollActivate("rotateIn");
  $(".slide-interior").scrollActivate("slideIn");

  //who we are page
  $(".specializing").scrollActivate("rotateIn");
  //$(".slide-specializing").scrollActivate("slideIn");
  $(".experienced").scrollActivate("rotateIn");
  $(".slide-experienced").scrollActivate("slideIn");
  $(".history").scrollActivate("rotateIn");
  $(".slide-history").scrollActivate("slideIn");

  //testimonials
  $(".tes-sec").scrollActivate("rotateIn");
  $(".slide-tes-left").scrollActivate("slideIn");

  //detail
  $(".detail-rotate-sec-1").scrollActivate("rotateIn");
  $(".detail-slide-sec-1").scrollActivate("slideIn");
  $(".detail-rotate-sec-2").scrollActivate("rotateIn");
  $(".detail-slide-sec-2").scrollActivate("slideIn");

});
