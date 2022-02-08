const nuns = [1,2,3,4,5];

let dobroNuns = nuns.map(function(e){
    return e * 2;
});

// console.log(dobroNuns);

const soma10 = e => e + 10;
const paraDinheiro = e =>  `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

let resultFuncoesMap = dobroNuns.map(soma10).map(paraDinheiro);

// console.log(resultFuncoesMap);

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]


const emObj = e => JSON.parse(e);
const precoList = e => e.preco;

let precosCarrinho = carrinho.map(emObj).map(precoList);
    

// console.log(precosCarrinho);

Array.prototype.myMapCustom = function(callback) {
    const newArray = [];
    for (let i=0; i< this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const carrinho2 = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]


const emObj2 = e => JSON.parse(e);
const precoList2 = e => e.preco;

let precosCarrinhoB = carrinho2.myMapCustom(emObj2).myMapCustom(precoList2);

console.log(precosCarrinhoB);