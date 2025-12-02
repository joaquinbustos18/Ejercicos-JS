// Juntar todas las letras de todas las palabras en un solo string

let palabras = ["ola", "hola", "mundo"];
let oracion = [];

palabras.forEach((valor) => {
  for (let index = 0; index < valor.length; index++) {
    oracion += valor[index];
  }
});
console.log(oracion);
