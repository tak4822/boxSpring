$(function(){
  // variabe for selectors
  var wHeight = $(window).height();
  var wWidth = $(window).width();
  var navHeight = 100;

  var $fixSec = $(".fix-section");
  var $fixSecTop = $fixSec.offset().top;
  var $fixCols = $(".fix-middle-col, .fix-right-col");

  var $picBox = $("#teamPic");
  var $progressBit = $(".progress-bit");

  var $team1 = $(".team-1");
  var $team1Top  = $team1.offset().top;
  var $team2 = $(".team-2");
  var $team2Top  = $team2.offset().top;
  var $team3 = $(".team-3");
  var $team3Top  = $team3.offset().top;
  var $team4 = $(".team-4");
  var $team4Top  = $team4.offset().top;
  var $team5 = $(".team-5");
  var $team5Top  = $team5.offset().top;

  var $progress1 = $(".progress-1");
  var $progress2 = $(".progress-2");
  var $progress3 = $(".progress-3");
  var $progress4 = $(".progress-4");
  var $progress5 = $(".progress-5");

  //fn for fixnavigation for team and projects page
  //only when the device is desktop
  if(wWidth >1024){
    var $fixedHeader = $(".fixed-header");
    $fixedHeader.find("header").addClass("header-fix");
    $fixedHeader.find("h3").addClass("ajust-margin");
  }

  $(document).scroll(function(){
    // variable for scroll position
    var sPos = $("body,html").scrollTop() || document.body.scrollTop;

    //fn for showing image and pic
    function showingTeam($teamNum,$progressNum) {
      if(!$progressNum.hasClass("progress-active")){
        $picBox.fadeOut(function(){
          $(this).attr("src", $teamNum.data("src")).fadeIn();
        });
        $progressBit.removeClass("progress-active");
        $progressNum.addClass("progress-active");
      }
    }

    // fixing the columns
    if( $fixSecTop - navHeight < sPos &&
      $team5Top - navHeight > sPos){
      $fixCols.removeClass("fix-team-bottom");
      $fixCols.addClass("fix-team-top");
    } else if($team5Top - navHeight < sPos) {
      $fixCols.addClass("fix-team-bottom");
    } else {
      $fixCols.removeClass("fix-team-top");
    }

    //changing content depens on scrolling position
    if(0 < sPos &&
      $team1Top - navHeight + (wHeight / 1.5) > sPos){
      showingTeam($team1,$progress1);

    } else if($team1Top - navHeight + (wHeight / 1.5 ) <= sPos &&
      $team2Top - navHeight + (wHeight /1.5) > sPos){
      showingTeam($team2,$progress2);

    } else if($team2Top - navHeight + (wHeight /1.5) <= sPos &&
      $team3Top - navHeight + (wHeight / 1.5) > sPos){
      showingTeam($team3,$progress3);

    } else if($team3Top - navHeight + (wHeight / 1.5) <= sPos &&
      $team4Top - navHeight + (wHeight / 1.5) > sPos){
      showingTeam($team4,$progress4);

    } else if($team4Top - navHeight + (wHeight / 1.5) <= sPos){
      showingTeam($team5,$progress5);
    }

  });
});
