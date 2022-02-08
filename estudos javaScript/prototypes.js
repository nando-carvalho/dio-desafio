//base para trabalhar com programação orientada a objetos

//Construtora ou Classe
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;    
}

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

//Primeiro o motor javascript vai procurar o método solicitado dentro de Pessoa1 depois em pessoa.prototype e se não encontrar ele vai em object.prototype

//instancia

const pessoa1 = new Pessoa('LUIZ', 'carvalho'); 
const pessoa2 = new Pessoa('Rosária', 'carvalho'); 

console.log(pessoa1);
console.log(pessoa2);

//Javascript é baseado em prototipos para passar propriedades e métodos de um objeto para outro.
// Protótipo é um termo utilizado para se referir ao que foi criado pela primeira vez. Serve de modelo para futuras produções;
//todos os objetos tem uma referencia para um prototipo que vem da propriedade prototype da função construtora que foi usada para criálo.
// quanto tentamos acessar um membro do objeto, primeiro o motor JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de prototipos é usada até o topo (null) até que ele possa encontrar esse tal membro


const objA = {
    chaveA: 'A'
    // __proto__ object.prototype
};


const objB = {
    chaveB: 'B'
    // __proto__ objA
};


const objC = new Object(); 
    objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objA); //o objeto C vai ter o prototype pelo objeto A
console.log(objC.chaveA); // o objeto C pode imprimir a Chave do A mas nao a do B

//ATENÇÃO 
// NÃO É RECOMENDAVEL UTILIZAR A PROPRIEDADE objeto.__proto__

// se quiser acessar a função proto utilize a função Object.getPrototypeOf();
    
