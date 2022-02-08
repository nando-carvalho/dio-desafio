const _velocidade = Symbol('velocidade');
class Automovel  {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if(typeof valor != 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;    
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }

}

const c1 = new Automovel('Fusca');

for(let i = 0; i<= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 2000;

console.log(c1);

class Motos extends Automovel {
    constructor (nome, cor, construtora){
        super(nome);
        this.cor = cor;
        this.construtora = construtora;
    }

    //metodo de instância, deverá ser chamado após criar instancia moto
    abastecer() {
        console.log('aumentar a gasolina da moto');
    }

    static freiar() {
        console.log('Freiando a moto com metodo estático, que pode ser chamado sem precisar do new e da instancia.');
    }
    
}

const moto = new Motos('cb300', 'verde esmeralda', 'honda');

console.log(moto);

moto.abastecer(); //metodo chamado pela instancia moto. 

Motos.freiar(); //metodo estático, referente a classe, nao precisa ser instanciado; como não estou instanciando a classe, eu nao tenho acesso aos dados da classe, ou construtores...
