const fatores = [2,3,4, 1, 10, 5, 7];
const produto = fatores.map((value,index) => value * 2);

console.log('Multiplicar');
console.log(fatores);
console.log(produto);


const paresFilter = fatores.filter((value, index) => (value % 2) === 0);

console.log('Pares');
console.log(paresFilter);

const somaFatores = fatores.reduce((acumulador, nextValue) => acumulador + nextValue);

console.log(somaFatores);

const precosProdutos = [20, 30, 40, 5];
const saldoAtual = 200;
function saldoDisponivel(precos, saldo) {
    let gastos = precos.reduce((acumulador, nextValue) => (acumulador + nextValue));
    return (saldo - gastos);
}

const retornoSaldo = saldoDisponivel(precosProdutos, saldoAtual);

console.log(retornoSaldo);


var N = parseInt(6);
for (i=1; i<=N; i++) {
	if ((i%2) === 0) console.log((i ** 2).toFixed());    //escreva sua lógica nos espaços em branco
}


