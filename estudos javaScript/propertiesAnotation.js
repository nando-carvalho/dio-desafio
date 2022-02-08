// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    //quero que a propriedade estoque fique travada 
    //(publicos) nome e preço se colocados aqui com this.NOMEATRIBUTO.
       
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave de estoque no console.log junto aos outros elementos públicos, lembrando que estoque é privado
        value: estoque, // mostra o valor de estoque
        writable: false, // não poderei alterar o valor de estoque
        configurable: true //podera apagar ou reconfigurar a chave? ou seja, posso repetir a property estoque e alterar os seus atributos. 

    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave de estoque no console.log junto aos outros elementos públicos, lembrando que estoque é privado
            value: nome, // mostra o valor de estoque
            writable: false, // não poderei alterar o valor de estoque
            configurable: true //p
        },
        preco: {
            enumerable: true, //mostra a chave de estoque no console.log junto aos outros elementos públicos, lembrando que estoque é privado
            value: preco, // mostra o valor de estoque
            writable: false, // não poderei alterar o valor de estoque
            configurable: true //p
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);