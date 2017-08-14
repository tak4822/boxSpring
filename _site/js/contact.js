//date picker from jquery UI
$(function(){
  $( "#datepicker" ).datepicker();
  $( "#anim" ).on( "change", function() {
    $( "#datepicker" ).datepicker( "option", "showAnim", "slide" );
  });

});
