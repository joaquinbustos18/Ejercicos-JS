// Convertir un array de objetos a un único objeto agrupado

let productos = [
  { categoria: "ropa", nombre: "remera" },
  { categoria: "electronica", nombre: "mouse" },
  { categoria: "ropa", nombre: "pantalón" },
];

let unico = productos.reduce((acc, valor) => {
  // Si la categoría no existe aún en el acumulador, la creamos como array
  if (!acc[valor.categoria]) {
    acc[valor.categoria] = [];
  }

  // Agregamos el nombre dentro del array correspondiente
  acc[valor.categoria].push(valor.nombre);

  return acc;
}, {});

console.log(unico);
