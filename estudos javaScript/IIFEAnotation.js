// IIFE -> Immediately invoked function expression
// a Função que encapsula as demais protegem as internas do escopo global, fazendo com que eles acessem primeiro o escopo dela para obter coisas que não encontram na propria função
// Alternativa muito utilizada para fugir do escopo global. 
(function(idade, peso, altura) {
    const sobrenome = 'carvalho';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    falaNome();
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

//sintaxe

(function() {
    //outras funções
})();
