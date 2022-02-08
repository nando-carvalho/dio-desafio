// const produto = new Object;
// produto.nome = 'Cadeira';
// produto['marca do produto'] = 'Generica';
// produto.preco = 220;

// console.log(produto);
// delete produto.preco;
// console.log(produto);

// //formas de criar objetos em javascript:

// //usando a notação literal
// const obj1 = {}

// //a partir de instanciar new Object
// const obj2 = new Object;

// // criar suas proprias funções construtoras
// function Produto(nome, preco, desc){
//     this.nome = nome;
//     this.getPrecoComDesconto = () => {
//         return preco * (1-desc);
//     }
// }

// const p1 = new Produto('Caneta', 7, 0.15);

// // a partir de uma função factory
// function criarFuncionario(nome, salarioBase, faltas) {
//     return{
//         nome, 
//         salarioBase,
//         faltas,
//         getSalario() {
//             return (salarioBase /30)
//         }
//     }
// }

// const funcionario1 = criarFuncionario('João', 600, 3);

// // object.create

// const filha = Object.create(null);
// filha.nome = 'Ana';

// // forma de criar objeto usando: json.parse
// const fromJSON = JSON.parse('{"info", "casa"}');
// console.log(fromJSON.info);

const pessoa = { 'nome': 'nando', 'idade': 33, status: 'trabalhando'};
pessoa.status = 'estudando';
pessoa.nome = 'Fernando';
console.log(pessoa);

