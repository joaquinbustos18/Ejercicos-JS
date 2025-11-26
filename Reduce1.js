// Sumar todos los números

let nums = [3, 7, 1, 9];

let numeros = nums.reduce((acc, valor) => {
  return acc + valor;
}, 0);
console.log(numeros);
