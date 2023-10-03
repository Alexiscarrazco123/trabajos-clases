// mayores o iguales a 5 imprimir con for each
const arr =  [10,4,7,2,6,9,3,5]
let num = arr.filter(num => num >=5);
num.forEach(num=>{
    console.log(num)
});
// 2 frutas 

const frutas =['naranja','platono','manzana','fresa','kiwi'];
let frut =frutas.slice(2,4);
console.log(frut);

// 3 interaa suma 10
const numbers=[3,2,6,8,9,2]
const num1 =numbers.map( num=> num+10);
console.log(numbers);
console.log(num1); 


// 4 concatenar
const array1=['H','I','J']
const array2=['K','L','M']
const array3=array1.concat(array2);
console.log(array3);

// 5 metodo include
const pais=['Mexico','USA','Francia']
console.log(pais.includes('Francia'));


  


