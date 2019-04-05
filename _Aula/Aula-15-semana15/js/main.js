(function(){
    
    function myFunction(arg1, arg2){
        return arguments[1];
    }
    
    console.log(myFunction(1, 2));
    
    
    
    
    
    
    
    
    /*
     //OBJETO THIS 
     
     
    function myFunction(){
        return this;
    }
    console.log('myFunction: ',myFunction(), myFunction() === window);
    
    
    var myObject = {
        myProperty: 1,
        init: function init(){
            return this;
        }
        
        
    };
    console.log('myObject', myObject.init(), myObject.init() === myObject);
    
    
    
    function MyConstructor(){
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
        
       
    } 
    
    var constructor = new MyConstructor();
    
    
    console.log('MyConstructor: ', constructor);
    console.log(prop1);
    
    var myObject = {
        myProperty: 1,
        init: function init(){
            return this.myProperty;
        }
    };
    
    console.log(myObject.init());
    
    */
})();
