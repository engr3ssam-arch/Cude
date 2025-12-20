//SLACK MENUE
$(document).ready(function(){
  
  $(".menu-icon").click(function(event){
    event.stopPropagation(); 
    $(".slack-menu").fadeToggle(); 
  });


  $(document).click(function(){
    $(".slack-menu").fadeOut();
  });

  $(".slack-menu").click(function(event){
    event.stopPropagation();
  });
});
