// Contar cuántas veces aparece la letra "a" en todos los elementos

let palabras = ["casa", "perro", "manzana", "agua"];

let As = 0;

palabras.forEach((valor) => {
  for (let index = 0; index < valor.length; index++) {
    if (valor[index] === "a") {
      As++;
    }
  }
});

console.log(As);
