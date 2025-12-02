// Guardar solo los números mayores a 50

let numeros = [10, 55, 80, 32, 99];
let mayores = [];

numeros.forEach((valor) => {
  if (valor > 50) {
    mayores.push(valor);
  }
});
console.log(mayores);
