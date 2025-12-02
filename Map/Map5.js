// Convertir temperaturas de °C a °F

let grados = [0, 10, 20];

let nuevoArr = grados.map((valor) => {
  return (valor * 9) / 5 + 32;
});

console.log(nuevoArr);
