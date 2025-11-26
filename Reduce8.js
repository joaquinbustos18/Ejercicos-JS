// Crear un objeto con la cantidad de repeticiones de cada palabra

let palabras = ["perro", "gato", "perro", "pez"];

let repeticiones = {
  perro: 0,
  pez: 0,
  gato: 0,
};

let contador = palabras.reduce((acc, valor) => {
  if (acc[valor]) {
    acc[valor] += 1;
  } else {
    acc[valor] = 1;
  }
  return acc;
}, {});

console.log(contador);
