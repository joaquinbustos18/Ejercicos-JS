// Contar cuántas veces aparece un número

let nums = [1, 2, 2, 3, 2, 4];

let numeroRepetido = 2;
let vecesNumero = 0;

for (let index = 0; index < nums.length; index++) {
  if (nums[index] === numeroRepetido) {
    vecesNumero++;
  }
}

console.log(vecesNumero);
