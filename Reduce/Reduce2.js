// Multiplicar todos los números

let nums = [2, 3, 4];

let Multiplicar = nums.reduce((acc, valor) => {
  return acc * valor;
}, 1);
console.log(Multiplicar);
