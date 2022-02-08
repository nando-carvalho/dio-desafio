// for classico so funciona com iteráveis (array ou strings)
// for in retorna o indice ou/e valor (string, array ou objetos)
// for of - so funciona para iteraveis (arrays ou strings)


// const frutas = ['goiaba', 'abacate', 'banana', 'maça', 'pera'];
// const pessoa = {
//     nome: 'luiz',
//     sobrenome: 'carvalho',
//     idade: 32
// };
// for (let pe in pessoa) {
//    console.log(pe, pessoa[pe]);
// }    

// for (let valor of frutas){
//     console.log(valor);
// }

// frutas.forEach(function(valor, indice, array){
//  console.log(valor, indice, array);
// });

const dadosPessoaisCadastroindividual = {
    responsavelBolsaFamilia: 0,
    foraArea: 0,
    responsavel: 0,
    codigoResponsavel: 'formValues.codigoResponsavel',
    relacaoParentescoCidadao: 'formValues.relacaoParentescoCidadao',
    curso: 'formValues.curso',
    mercadoTrabalho: 'formValues.mercadoTrabalho',
    }
    
    
    for (let nameKeys in dadosPessoaisCadastroindividual) {
        dadosPessoaisCadastroindividual[nameKeys] = null;
    };
    
    console.log('RETURN', dadosPessoaisCadastroindividual);