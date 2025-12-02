// Convertir un array de objetos a un array de valores

let obj = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 25 },
];

let valores = obj.map((valor) => {
  return valor.edad;
});

console.log(valores);
