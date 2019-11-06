$(document).ready(function(){
    $(body).fadeIn(4000);
    alert('radabuda');
    $('#me').fadeIn(4000);
    $('#text').slideDown(2000);


    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        $('#floats').fadeIn(3000);
    }else{
        $('#floats').fadeOut(3000);
    }
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        $('#work').fadeIn(3000);
    }else{
        $('#work').fadeOut(3000);
    }
    if (document.body.scrollTop >= 1400 || document.documentElement.scrollTop >= 1400) {
        $('#skills').slideDown(3000);
    }else{
        $('#skills').fadeOut(3000);
    }
    if (document.body.scrollTop >= 1400 || document.documentElement.scrollTop >= 1400) {
        $('#logos').slideDown(3000);
    }else{
        $('#logos').fadeOut(3000);
    }
  }
});
