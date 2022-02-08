// ES8 Object.values // Object.entries
// valor e chave valor de um objeto

const obj = {a:1, b:2, c:3}
console.log(Object.values(obj)); //valor
console.log(Object.entries(obj)); //chave valor 

// melhorias na notação literal

const nome = 'Carla'

const pessoa = {
    nome, // = a nome: nome,
    ola() {
        return 'oi'
    }
}

console.log(pessoa.nome, pessoa.ola());

//Class

class Animal {}
class Cachorro extends Animal {
    latir() {
        return "Au au"
    }
}

console.log(new Cachorro().latir());