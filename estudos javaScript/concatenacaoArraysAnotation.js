const array1 = [1,2,3];
const array2 = [4,5,6];

let concatfunction = array1.concat(array2);
console.log(concatfunction);

//Utilizando operator Spread  ...arrayName

const spread = [...array1, ...array2];

console.log(spread);