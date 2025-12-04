/*
Crea un programa donde tengas un botón que cuente cuántas
veces lo has pulsado.

Cuando llegues a 17 clics, se muestra un mensaje de "¡Límite alcanzado!".

Si se sobrepasa, el contador se resetea y el contador comienza de nuevo.
*/

let contador = 0;

let numero = document.querySelector(".numero");
let boton = document.querySelector(".boton");

boton.addEventListener("click", () => {
  contador++;
  numero.textContent = contador;

  if (contador === 17) {
    alert("¡Límite alcanzado!");
  } else if (contador > 17) {
    contador = 0;
    numero.textContent = contador;
  }
});
