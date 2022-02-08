//let e const
{
    var a = 2; 
    let b = 3;
    console.log(b);
}
console.log(a);    
//console.log(b); //só existe dentro do escopo acima

//Template string
const produto = 'ipad';
console.log(`O ${produto} 
é
 caro!`);   //se dar enter e quebrar a linha, ele irá imprimir com quebras, diferente de quando se usa "" ou ''

 //Destructuring
 const [l, e, ...tras] = 'Cod3r' //estou definindo que l recebe C, e recebe o e destructuring tras recebe o resto da palavra
 console.log(l, e, tras);

 const [x, y] = [1,2]  //estou atribuindo 1 a x e 2 a y
 console.log(x,y);

 const {idade, nome} = {nome: 'Ana', idade: 8}  //aqui eu tenho 2 constantes que foram retiradas de um objeto que tráz esses indices
 const {idade: i, nome} = {nome: 'Ana', idade: 8} // nesse exemplo estou RENOMEANDO idade pela letra i.
 console.log(nome, i);
