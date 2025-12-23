/*
Ejercicio 37:

  1. Crea un formulario con estos campos: Nombre, Apellidos y edad
  2. Añade un botón de enviar y usa el evento submit
  3. Muestra los datos por pantalla cuando se termine de enviar el form
*/

let formulario = document.querySelector("#formulario");
let boton = document.querySelector("#enviar");

let nombre = document.querySelector(".nombre");
let Apellidos = document.querySelector(".apellidos");
let edad = document.querySelector(".edad");

let texto = document.querySelector(".texto");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  texto.textContent = `Tu nombre es: ${nombre.value} tu apellidos son: ${Apellidos.value} y tu edad es de: ${edad.value}`;
});
