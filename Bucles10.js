// Mostrar los primeros 10 números pares

let contador = 0;

for (let index = 1; ; index++) {
  if (index % 2 === 0) {
    console.log(index);
    contador++;

    if (contador === 10) {
      break;
    }
  }
}
