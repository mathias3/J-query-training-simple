//var skillset = document.getElementsByClassName('skillset');
//alert(skillset);
 var main = function(){
 
   $('.skillset').hide();
   $('.skillset').fadeIn(1000);
   $('.projects').on('click', function() {
  $('.projects').hide();
   });
    $('.projects-button').on('click', function() {
  //$(this).next().toggle();for now
      $(this).next().slideToggle(400);
      $(this).toggleClass('active');
      $(this).text('Projects Viewed');
      
   });
 };
$(document).ready(main);
