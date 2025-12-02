// Filtrar productos en stock

let productos = [
  { nombre: "Teclado", stock: 0 },
  { nombre: "Mouse", stock: 5 },
];

let stock = productos.filter((valor) => valor.stock > 0);
console.log(stock);
