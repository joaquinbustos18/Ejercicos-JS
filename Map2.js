// Convertir todos los nombres a MAYÚSCULAS

let nombres = ["juan", "ana"];

let nuevoArr = nombres.map((valor) => {
  return valor.toUpperCase();
});

console.log(nuevoArr);
