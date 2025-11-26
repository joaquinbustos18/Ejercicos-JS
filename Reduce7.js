// Sumar solo los números mayores a 10

let nums = [2, 20, 15, 3, 12];

let mayores = nums.reduce((acc, valor) => {
  if (valor > 10) {
    return acc + valor;
  } else {
    return acc;
  }
}, 0);
console.log(mayores);
