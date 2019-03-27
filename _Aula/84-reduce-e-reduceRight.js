var arr = ['w', 'i', 'l', 'l', 'i', 'a', 'n' ];


//  juntando um array com reduce()
var reduce = arr.reduce(function(acumulado, atual, index, array){
    return acumulado + atual;  
});

console.log(reduce);
//willian

//invertendo uma string reserso
var reduce = arr.reduceRight(function(acumulado, atual, index, array){
    return acumulado + atual;  
});
console.log(reduce);