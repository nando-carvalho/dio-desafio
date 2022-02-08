let arrayNumerosMistos = [];

function resolvendoPares(lista){
    if (lista === undefined || lista == null || lista.length === 0){
        return -1;
    }
    let pares = lista.map((value) => ((value !== 0) && ((value % 2) === 0)) ? 0 : value);
    return pares;
};

let pares = resolvendoPares(arrayNumerosMistos);

console.log(pares);

