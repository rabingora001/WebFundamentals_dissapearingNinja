$(document).ready(function(){
    
    $('img.hide').click(function(){
        $(this).hide();
    });
    $('.restore').click(function(){
        $('.hide').show();
    });


});