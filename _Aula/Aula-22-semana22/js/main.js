(function(win, doc){
    'use strict';
    
    
    function MyFunction(name, lastName){
        this.name = name;
        this.lastName = lastName;
        this.age = 30;
    }
    
    MyFunction.prototype.fullName = function(){
        return this.name + ' ' + this.lastName;
    }
    
    
    
    var willian = new MyFunction('Willian', 'Sales');
    
    
    MyFunction.prototype.age = 20;
    
    console.log( willian.age );
    
    
    
    
})(window, document);

