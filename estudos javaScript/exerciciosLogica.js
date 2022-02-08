function maiorNumero(x,y){
    let maiorDeles =  (x>y)? x : y;
    return maiorDeles;
}

const max2 = (x,y) => x == y ? 'sao iguais' : 'tente a funcao maiorNumero';

console.log(maiorNumero(41,9));
console.log(max2(4,4));

