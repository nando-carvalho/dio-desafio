// Funções sempre retornam undefined se voce não passar nada

// função literal  
// function fun1() { }

// // atribuir a função a uma constante

// const func2 = function() {}

// // armazenar uma função em um array

// const array = [function(a,b){return a + b}, fun1, fun2]

// //armazenar função dentro de um atributo de um objeto

// const obj = {}
// obj.falar = function () { return 'owpa'}
// console.log(obj.falar());

// //podemos passar uma função como parametro também 

// function run (fun) {
//     fun()
// }

// run(function () {console.log('executando...')})


const multiply = (x, y) => x* y;

console.log(multiply(3, 3));

const arr = [0, 1,2,3,4,5];
const result = arr.reduce((prev, cur) => prev + cur, 2); // o valor final é o valor que começará a soma, se for 0, ele apenas soma o que tem no array, com o 2 ele agrega e fica em 17 a soma
console.log(result);


let x = 0;
let y = '0';

if (x) {
    console.log(10);
}else if (y){
    console.log(20);
}else{
    console.log(100);
}
