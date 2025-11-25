// Filtrar usuarios mayores de edad

let usuarios = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Juan", edad: 15 },
];

let filtrar = usuarios.filter((valor) => valor.edad > 18);
console.log(filtrar);
