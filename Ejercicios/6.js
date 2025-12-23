/*
Ejercicio 36:

Crea una caja de texto que cuente cuántas teclas ha pulsado
el usuario dentro de la caja.

Muestra el número de teclas pulsadas en tiempo real en la web.
*/

let contador = document.querySelector("#contador");
pulsaciones.textContent = `Pulsaciones ${texto}`;

contador.addEventListener("input", () => {
  let texto = contador.value.length;

  pulsaciones.textContent = `Pulsaciones ${texto}`;
});
