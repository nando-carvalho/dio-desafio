// defineProperty - GETTERS AND SETTERS

function Produto(nome, preco, estoque) {
    //quero que a propriedade estoque fique travada 
    //(publicos) nome e preço se colocados aqui com this.NOMEATRIBUTO.
    this.nome = nome;
    this.preco = preco;
       
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave de estoque no console.log junto aos outros elementos públicos, lembrando que estoque é privado
        value: estoque, // mostra o valor de estoque
        writable: true, // não poderei alterar o valor de estoque
        configurable: true //podera apagar ou reconfigurar a chave? ou seja, posso repetir a property estoque e alterar os seus atributos. 

    });
   
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);