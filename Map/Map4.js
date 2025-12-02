// Crear un array con la longitud de cada palabra

let palabras = ["hola", "mundo"];

let nuevoArr = palabras.map((valor) => {
  return valor.length;
});

console.log(`la longitud de la palabra es de: ${nuevoArr}`);
