$(document).ready(function() {
    $('div').click(function(){
        $('div').addClass('red');
        $('div').effect('explode');
        $('p').fadeTo('fast',0.2);
    }); 
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
          // Left arrow key pressed
          case 37:
            $('img').animate({left: "-=10px"}, 'fast');
            break;
          // Up Arrow Pressed
          case 38:
            $('img').animate({top: "-=10px"}, 'fast');
            break;
          // Right Arrow Pressed
          case 39:
            $('img').animate({left: "+=10px"}, 'fast');
            break;
          // Down Arrow Pressed
          case 40:
            $('img').animate({top: "+=10px"}, 'fast');
            break;
        }
    }); 
    $('img').click(function(){
        $('img').effect('bounce', {times:3}, 500);          
    }); 
    $('p').click(function(){
        $('p').effect('slide', {times:3}, 500);          
    }); 
});



