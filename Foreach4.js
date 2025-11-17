// Dado [10, 20, 30, 40], sumá todos los valores usando forEach.

let num = [10, 20, 30, 40];
let suma = 0;

num.forEach((valor, indice) => {
  suma = suma + valor;
});

console.log(suma);
