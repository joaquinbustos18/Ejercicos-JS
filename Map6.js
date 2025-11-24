// Dado un array de precios sin IVA, crear un nuevo array donde cada precio tenga sumado el 21% de IVA.

let precios = [100, 250, 80];

let iva = precios.map((valor) => {
  return valor * 1.21;
});

console.log(iva);
