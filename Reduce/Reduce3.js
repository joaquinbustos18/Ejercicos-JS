// Encontrar el número más grande

let nums = [10, 55, 32, 9];

let numeroGrande = nums.reduce((acc, valor) => {
  if (acc > valor) {
    return acc;
  } else {
    return valor;
  }
}, 0);

console.log(numeroGrande);
