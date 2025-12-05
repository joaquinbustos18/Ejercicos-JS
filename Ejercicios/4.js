/*
Ejercicio 34:

Crea una programa que abra una nueva ventana con una web,
pero en diferentes tamaños.

Haz que el usuario pueda elegir entre tres tamaños (pequeño, mediano y grande).

*/

let chica = document.querySelector(".chica");
let mediana = document.querySelector(".mediana");
let grande = document.querySelector(".grande");

let ventana = (ancho, alto) => {
  window.open("https://google.com", "_blank", `width=${ancho},height=${alto}`);
};

chica.addEventListener("click", () => {
  ventana(400, 400);
});

mediana.addEventListener("click", () => {
  ventana(1000, 1000);
});
grande.addEventListener("click", () => {
  ventana(1500, 1500);
});
