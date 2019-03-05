/*global $*/
$(document).ready(function(){
   console.log("testing");
   $("#circuitImage").hover(function(){
    $(this).css("height", "100%", "width", "100%");
    }, function(){
    $(this).css("height", "50%", "width", "auto");
  });
  $("#infoClick").click(function(){
      alert("To access these pages, click it's caption. Thanks for visiting!");
  });
   
    
});