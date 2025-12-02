// Tenés que recorrer cada palabra y cada letra, usando forEach. ["casa", "perro", "manzana"]

let palabras = ["casa", "perro", "manzana"];

palabras.forEach((valor) => {
  for (let index = 0; index < valor.length; index++) {
    console.log(valor[index]);
  }
  console.log(valor);
});
