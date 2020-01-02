$(document).ready(function(){
    let altura = $('.navbar').offset().top;
   
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura){
            $('.navbar').addClass('fixed-top');
        } else{
            $('.navbar').removeClass('fixed-top');
        }
    });
});