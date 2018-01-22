function myFunction(el) {
        document.getElementById("down-text1").style.display = "none";
        document.getElementById("down-text2").style.display = "none"; 
        document.getElementById("down-text3").style.display = "none"; 
        document.getElementById(el).style.display = "block";
}
$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 1,
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});
$(document).ready(function() {
 
  var owl = $("#owl-demo2");
 
  owl.owlCarousel({
      items : 1,
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});