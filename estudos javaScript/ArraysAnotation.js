// Arrays são valores por referência

const nomes = ['Eduardo', 'maria', 'joana'];
const novoArray = nomes;
//Qualquer alteração em qualquer um dos dois, muda os dois. 
novoArray.push('lucio');
// Se eu usar o spread operator para fazer a copia, ele deixa de ser por referência e o que eu faço em spreadArray daqui em diante, não afetará em nomes;
let spreadArray = [...nomes];
spreadArray.unshift('Marieta');
//posso deletar itens
delete nomes[4];
console.log(nomes);
console.log(spreadArray);

// posso criar um array como construtor tbm
const nomesObj = new Array('Eduardo', 'maria');