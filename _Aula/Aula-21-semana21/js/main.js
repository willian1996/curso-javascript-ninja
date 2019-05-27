(function(win, doc){
    'use strict';
    
    
    
    
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;
    
    var counter = 0;
    function timer(){
        console.log('timer', counter++);
        
        

    }
    temporizador = setInterval(timer, 1000);

    
    
    timer();
    
    $button.addEventListener('click', function(){
        clearInterval(temporizador);
    },false);

    
})(window, document);

