$(document).ready(function() {
    $('div').click(function(){
        $('div').addClass('red');
        $('div').fadeOut('fast');
        $('p').fadeTo('fast',0.2);
    });   
});

