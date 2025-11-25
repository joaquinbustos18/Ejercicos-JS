// Filtrar números mayores al promedio del array

let nums = [10, 20, 5, 40];
let suma = 0;

for (let index = 0; index < nums.length; index++) {
  suma += nums[index];
}

let promedio = suma / nums.length;

let mayoresPromedio = nums.filter((valor) => valor > promedio);
console.log(mayoresPromedio);
