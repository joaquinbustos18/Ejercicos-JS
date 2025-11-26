// Convertir un array de strings en un solo string

let palabras = ["Hola", "como", "estas"];

let string = palabras.reduce((acc, valor) => {
  return acc + " " + valor;
});

console.log(string);
