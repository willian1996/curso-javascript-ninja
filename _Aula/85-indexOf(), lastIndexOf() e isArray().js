var arr = [1,2,3,4,5];


//"indexOf()" verifica se existe um indice em um array
console.log(arr.indexOf(3));

var nome = ['w','i','l','l','i','a','n'];

nome.indexOf('w');
//0

//procurando a partir do indice 6, colocando o indice 6 como segundo parametro
nome.indexOf('a',6);
//-1

//verificando verdadeiro ou falso
nome.indexOf('a') > -1;
//true

nome.indexOf('b') > -1;
//false


//"lastIndexOf()" é igual ao indexOf mas produra do final para o inicio
nome.lastIndexOf('i');

//"isArray" verifica se é um array
Array.isArray([]);
//true

Array.isArray({});
//false

Array.isArray(nome);
//true

Array.isArray(arr);
//true
