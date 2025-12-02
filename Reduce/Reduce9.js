// Sacar el promedio

let nums = [5, 10, 15, 20];

let suma = nums.reduce((acc, valor) => {
  return acc + valor;
}, 0);

let promedio = suma / nums.length;

console.log(promedio);
