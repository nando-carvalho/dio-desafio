//Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos que o array original dependendo da condição passada na função de callback

const numeros = [5,50,80, 1,2,3,4,5,6,7,11,15,22,27];
const numerosFiltrados = numeros.filter(valor=> valor> 10);
console.log(numerosFiltrados);

//MAP - Altera os valores do array, ele usa os valores do array original, itera sobre eles e faz a modificação pedida na condição

const numerosMapeados = numeros.map(valor => valor * 2);
console.log(numerosMapeados);

const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47}
];

const nomes = pessoas.map(obj => obj.nome); //retorna o nome
const nomesRemovidos = pessoas.map(obj => ({idade: obj.idade})); //remove uma chave
console.log(nomesRemovidos);

//REDUCE - mais utilizado para reduzir todos os números a um elemento. 

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    // o acumulador var recebe o valor 0 passado no final da função    
    return acumulador;
}, 0); 

console.log(total);

const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if (valor % 2 === 0) acumulador.push(valor);
    // o acumulador var recebe o valor 0 passado no final da função    
    return acumulador;
}, []); 

console.log(pares);

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}); //se eu não passo o acumulador, ele vai apontar para o primeiro elemento do objeto. 

console.log(maisVelha);