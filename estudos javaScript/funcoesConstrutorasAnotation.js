// função construtora e funções fabrica retornam objetos, mas na função construtora devemos mudar a forma como a função é construída
// função construtora exige que o nome da mesma seja maiuscula function Pessoa(); já a função fabrica pode ser criada como uma função normal function pessoa()

//Ao criar a função construtora, ela propria já é construida como um objeto, logo eu posso referenciála com o this diretamente, por exemplo:
// Pessoa.nome  = this.nome
function Pessoa(nome, sobrenome){

    //variaveis privadas que não estaram disponíveis fora do construtor pessoa
    const id = 1234;
    const metodoPrivado = function(){
        console.log('sou seu metodo privado');
    };
    //Atributos ou metodos publicos.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log('sou um método da pessoa: ', this.nome);
    };

}

//para eu criar novos moldes dessa pessoa eu preciso fazer o seguinte:

const pessoa1 = new Pessoa('Luiz', 'Carvalho');
const pessoa2 = new Pessoa('Rosaria', 'Carvalho');
const pessoa3 = new Pessoa('Nando', 'Carvalho');

pessoa1.metodo();