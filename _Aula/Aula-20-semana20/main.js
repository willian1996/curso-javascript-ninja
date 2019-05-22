(function(win, doc){
    'use strict';

    
    //console.log(document.getElementById('my-link'));
    
    //console.log(document.getElementsByClassName('my-link'));
    
//    var $inputs = document.getElementsByTagName('input');
//    console.log($inputs.length);
    
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');
       
    
    $button.addEventListener('click', function(event){
        event.preventDefault();
        console.log('Click no botao');
    }, false);
    
    $inputUsername.addEventListener('click', function(){
        alert("Clicou no input");
    }, false);
    
    
    
})(window, document);