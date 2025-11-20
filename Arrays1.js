// Crear un nuevo array con los nombres en mayúsculas

let nombres = ["ana", "luis", "marcos"];
let nuevoArray = [];

nombres.forEach((valor) => {
  nuevoArray.push(valor[0].toUpperCase() + valor.slice(1));
});

console.log(nuevoArray);
