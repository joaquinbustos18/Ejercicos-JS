// Contá cuántos valores son mayores a 50, dentro del Array.

let numeros = [10, 34, 22, 23, 21, , 67, 80, 100, 55];

numeros.forEach((valor) => {
  if (valor > 50) {
    console.log("Tu numero " + valor + " es mayor que 50");
  }
});
