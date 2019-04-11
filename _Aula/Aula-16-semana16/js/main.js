(function(){
    
    var will = 'willian';
    console.log(will);
    
    //passando uma string para maiuscula
    var newWill = will.toUpperCase();
    console.log(newWill);
    
    
    //passando uma string para minuscula
    newWill = newWill.toLowerCase();
    console.log(newWill);
    
    
    //passando a primeira letra para maiuscula
    newWill = will.charAt(0).toUpperCase() + will.slice(1);
    console.log(newWill);
    
    
    /*
    function myFunction(a, a, b){
        'use sctrict';
        return a + b;
    }
    console.log(myFunction(1,2,3));
    */
    
    
    /*
    'use strict';
    var myVar = 2;
    var obj = {
        prop1: 'prop1',
        prop1: 'prop2',
        prop3: 'prop3'
    };
    console.log(obj);
    */
    
    
    
    
    /*
    'use strict';
    function Person(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        
    }
    console.log(new Person('Willian', 'Sales', 30));
    */
    
    
    
    
    
    
    
    
    /*
    //use strict não permite utilizar o with
    'use strict';
    var obj = {
        prop1:{
            prop2:{
                prop3:{
                    prop31:'prop31',
                    prop32:'prop32',
                    prop33:'prop33'

                }  
            }
        }
    };
    console.log(obj.prop1.prop2.prop3.prop31);
    console.log(obj.prop1.prop2.prop3.prop32);
    console.log(obj.prop1.prop2.prop3.prop33);
    with(obj.prop1.prop2.prop3){
        console.log(prop31, prop32, prop33);
         
    }
    */
    
    

    /*
    //use strict não permite declarar variaveis sem o var
    'use strict';
     var myName = 'Willian Sales';
    
    console.log(myName);
    
    */
})();

