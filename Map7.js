// Obtener las iniciales de cada nombre

let iniciales = ["Juan Perez", "Ana Lopez"];

let inicial = iniciales.map((valor) => {
  let espacio = valor.indexOf(" ");
  let inicialNombre = valor[0];
  let inicialApellido = valor[espacio + 1];
  return inicialNombre + inicialApellido;
});
console.log(inicial);
