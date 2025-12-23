/*
Ejercicio 38:

Valida el formulario del ejercicio anterior con JS, usando el dom
y las funciones / métodos que conoces.

El nombre y apellidos deben NO estar vacios.

La edad debe NO ser menor a 0 y debe siempre ser un número.
*/

let formulario = document.querySelector("#formulario");
let boton = document.querySelector("#enviar");

let nombre = document.querySelector(".nombre");
let Apellidos = document.querySelector(".apellidos");
let edad = document.querySelector(".edad");

let texto = document.querySelector(".texto");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nombre.value.trim() == "") {
    alert("Ingrese un nombre valido");
  }
  if (Apellidos.value.trim() == "") {
    alert("Ingrese un apellido valido");
  }

  if (edad.value < 0) {
    alert("imposible tener esa edad");
  }

  texto.textContent = `Tu nombre es: ${nombre.value} tu apellidos son: ${Apellidos.value} y tu edad es de: ${edad.value}`;
});
