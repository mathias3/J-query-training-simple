//var skillset = document.getElementsByClassName('skillset');
//alert(skillset);
 var main = function(){
 
   $('.skillset').hide();
   $('.skillset').fadeIn(1000);
   $('.projects').on('click', function() {
  $('.projects').hide();
   });
    $('.projects-button').on('click', function() {
  $('.projects').toggle();
      $('.projects-button').toggleClass('active');
   });
 };
$(document).ready(main);
