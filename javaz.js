$(document).ready(function(){
  $('.readmore').click(function(event){
	 event.preventDefault();
    $(".hide").slideDown();
    $(".readmore").hide();
  }); 

  $('.readless').click(function(event){
  	event.preventDefault();
    $(".hide").slideUp();
    $(".readless").hide();
    $(".readmore").show()
  });
  $('.learnmore').click(function(event){
	 event.preventDefault();
    $(".hide2").hide();
    $(".hide2").slideDown();
    $(".learnmore").hide();
  });
}); 
   