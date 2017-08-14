$(function(){
  // variable for fix columns
  var $fixSec = $(".fix-section");
  var $fixSecTop = $fixSec.offset().top;
  var $fixLeftAndMid = $(".fix-left-middle");
  var $fixLink = $(".linkline-wrap");

  var bodyHeight = $("body").height();
  var footerHeight = $("footer").height();
  var wHeight = $(window).height();
  var wWidth = $(window).width();
  var footerPos = $("footer").offset().top;


  //variables for showing projects
  var $showBox = $("#show-box");
  var $logoBox = $(".logo-box");
  var $showTitle = $("#showTitle");
  var $showDesc = $("#showDesc");
  var $href = $("#description").find(".btn-wrap")

  var navHeight = 100;


  //link line fpr resiponsive
  var linkBarPos;
  if(wWidth>480){
    linkBarPos = 60;
  } else {
    linkBarPos = 30;
  }


  //logobox responsive
  var logoBoxHeight;
  if(wWidth>768){//this is for desktop
    logoBoxHeight = 200;
  } else if(wWidth<=768 && wWidth>480){//this is for tablet
    logoBoxHeight = 100;
  } else { //this is for mobile
    logoBoxHeight = 50;
  }
  //fn for fixnavigation for team and projects page
  var $fixedHeader = $(".fixed-header");
  $fixedHeader.find("header").addClass("header-fix");
  $fixedHeader.find("h3").addClass("ajust-margin-projects");

  //assign logo so that it can be easily passed in parameter
  var $logo1 = $(".logo1");
  var $logo1Top = $logo1.offset().top;
  var $logo2 = $(".logo2");
  var $logo2Top = $logo2.offset().top;
  var $logo3 = $(".logo3");
  var $logo3Top = $logo3.offset().top;
  var $logo4 = $(".logo4");
  var $logo4Top = $logo4.offset().top;


  // fn for showing projects
  //change img,title,contents and href in the button
  //focused logo should be opacity=1
  function showProjects($logoNum){
    $showBox.attr("src", $logoNum.data("src") );
    if($showTitle.text() !== $logoNum.data("title")){
      $showTitle.fadeOut(function(){
        $(this).text( $logoNum.data("title")).fadeIn();
      });
      $showDesc.fadeOut(function(){
        $(this).text( $logoNum.data("container")).fadeIn();
      });
    }
    $href.attr("href", $logoNum.data("href"));
    $logoBox.css({"opacity":"0.5"});
    $logoNum.css({"opacity":"1"});
  }

  $(document).scroll(function(){
    //get scroll position
    var sPos = $("body,html").scrollTop() || document.body.scrollTop;

    //fix columns
    if($fixSecTop - navHeight < sPos &&
    bodyHeight - footerHeight - wHeight > sPos){
      $fixLeftAndMid.addClass("fix-col");
      $fixLink.addClass("fix-linkline");
    }
    else {
      $fixLeftAndMid.removeClass("fix-col");
      $fixLink.removeClass("fix-linkline");
    }

    //showing projects
    if(0 < sPos &&
              $logo1Top - (navHeight + linkBarPos) + logoBoxHeight > sPos){
      showProjects($logo1);
    } else if($logo2Top - (navHeight + linkBarPos) < sPos &&
              $logo2Top - (navHeight + linkBarPos - logoBoxHeight) > sPos){
      showProjects($logo2);
    } else if($logo3Top - (navHeight + linkBarPos) < sPos &&
              $logo3Top - (navHeight + linkBarPos - logoBoxHeight) > sPos){
      showProjects($logo3);
    } else if($logo4Top - (navHeight + linkBarPos) < sPos &&
              $logo4Top - (navHeight + linkBarPos - logoBoxHeight) > sPos){
      showProjects($logo4);
    }

  });
});
