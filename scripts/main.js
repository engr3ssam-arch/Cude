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

//scroll top
let topBtn = document.getElementById("topBtn");

let showHeight = 800;   

window.onscroll = function () {
  if (window.scrollY >= showHeight) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};


topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
