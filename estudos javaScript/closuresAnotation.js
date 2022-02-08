//closure é o escopo criado quando uma função é declarada, esse escopo permite acessar e manipular variaveis externas e proximas a função
// Closure é a habilidade da função filha em acessar o seu escopo lexico, englobando tudo que está ao seu redor.
//Escopo global
function retornaFuncao() {
    //Escopo da função pai
    const nome = 'Luiz';
    return function () {
        //Escopo da função filha
        return nome;
    };
};

const funcao = retornaFuncao();
console.log(funcao);


const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());