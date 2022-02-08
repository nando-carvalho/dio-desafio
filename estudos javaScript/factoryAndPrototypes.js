function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {

        falar() {
            console.log(`${this.nome} está falando`);
        },

        comer() {
            console.log(`${this.nome} está comendo`);
        },

        beber() {
            console.log(`${this.nome} está bebendo`);
        },
    };
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome
        }
    });
};

const p1 = criaPessoa('Luiz', 'Fernando');
const p2 = criaPessoa('Maria', 'Tarcila');

p1.falar();
p2.beber();

//Factory

function criarProduto(nomeProduto, preco) {
    return {
        nomeProduto,
        preco,
        desconto: 50
    }
}

const p1 = criarProduto('Camisa Flamengo', 150);

