/*
Crea un programa que permita mover la ventana a diferentes posiciones en la pantalla.

Usa botones para mover la ventana a la esquina superior izquierda, superior derecha, inferior izquierda e inferior derecha.
*/

let arribaIzquierda = document.querySelector(".arribaIzquierda");
let arribaDerecha = document.querySelector(".arribaDerecha");
let abajoIzquierda = document.querySelector(".abajoIzquierda");
let abajoDerecha = document.querySelector(".abajoDerecha");

// Abrimos una sola ventana
let ventana = window.open("https://google.com", "", "width=400,height=400");

// Tamaño de la ventana
const ancho = 400;
const alto = 400;

// ESQUINA SUPERIOR IZQUIERDA
arribaIzquierda.addEventListener("click", () => {
  ventana.moveTo(0, 0);
});

// ESQUINA SUPERIOR DERECHA
arribaDerecha.addEventListener("click", () => {
  ventana.moveTo(screen.width - ancho, 0);
});

// ESQUINA INFERIOR IZQUIERDA
abajoIzquierda.addEventListener("click", () => {
  ventana.moveTo(0, screen.height - alto);
});

// ESQUINA INFERIOR DERECHA
abajoDerecha.addEventListener("click", () => {
  ventana.moveTo(screen.width - ancho, screen.height - alto);
});
