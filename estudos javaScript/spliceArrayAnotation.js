const nomes = ['Maria', 'João', 'Eduardo', 'Luiz', 'Gabriel', 'Júlia'];

// explicação de argumentos da função splice
// nomes.splice(qual indice quero começar a mexer, quantos elemento quero remover do Array, elementos para adicionar separados por virgula);

const removidos = nomes.splice(2, 2); 
const incluidos = nomes.splice(2, 0, 'Barbara'); //não removeu nenhum item e incluiu barbara no indice 2

console.log(nomes, 'item removido: ', removidos, 'incluidos: ', incluidos); 