
$(document).ready(function (){
    $('.slider').slider({
        indicators: false
    });
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('.carousel').carousel({
      padding: 100
    }); // Move next n times.
    autoplay()   
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 3000);
    }

       

});

