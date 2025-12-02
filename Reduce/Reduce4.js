// Contar cuántas veces aparece un número

let nums = [1, 2, 2, 3, 2, 4];
let buscar = 2;

let numeroRepetido = nums.reduce((acc, valor) => {
  if (valor === buscar) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);
console.log(numeroRepetido);
