// Sumá únicamente los pares. [2, 7, 10, 15, 22, 3]

let numeros = [2, 7, 10, 15, 22, 3];
let paresResultado = 0;

numeros.forEach((valor) => {
  if (valor % 2 === 0) {
    paresResultado = paresResultado + valor;
  }
});
console.log(paresResultado);
