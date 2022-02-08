// Arrays são valores por referência

const nomes = ['Eduardo', 'maria', 'joana', 'Margarida', 'Luiz', 'Rosa'];
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
const nomesObj = new Array('Eduardo', 'maria', 'Cida');
//posso remover o elemento do meu array usando pop(); pop retorna o elemento removido também
const elementoRemovido = nomesObj.pop();
console.log('pop removeu do final:', elementoRemovido, nomesObj);
//splice, parte da posição 1, exclui os dois elementos subsequentes e add os dois proximos passados por parametro
const nomesAprovados = nomes.splice(1,2, 'Jordan', 'Maisum');
console.log('splice',nomesAprovados);

//posso fatiar meu array usando slice - slice(indice de partida, indice de chegada)
const novoArraySlice = nomes.slice(1,3);
console.log('slice', novoArraySlice);

//Convertendo string em array

const nomeCompleto = 'Luiz Fernando de Carvalho';
const meuNomeArray = nomeCompleto.split(' ');
console.log('meu nome', meuNomeArray);

// se eu quiser unir todos os elementos do array eu uso join
const meuNomeJunto = meuNomeArray.join('^^');
console.log('join: ', meuNomeJunto);
