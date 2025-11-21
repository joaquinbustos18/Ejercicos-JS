// Sumar todos los números de un array
// recorrer array + acumulador.

let nums = [4, 2, 9, 1];

let acumulador = 0;

for (let index = 0; index < nums.length; index++) {
  acumulador += nums[index];
}

console.log(acumulador);
