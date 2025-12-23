<<<<<<< HEAD
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
=======
let formulario = document.querySelector("#formulario");

let boton = document.querySelector("#boton");

function borrar(indice) {
  // sacar array de objetos de local storage
  let peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas"));

  // eliminar peli del indice
  peliculasGuardadas.splice(indice, 1);

  // actualiar array local storage
  localStorage.setItem("peliculas", JSON.stringify(peliculasGuardadas));

  // mostrar listado

  mostrar();
}

function mostrar() {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";

  let peliculasGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];

  if (peliculasGuardadas.length === 0) {
    lista.innerText = "no hay peliculas";
    return;
  }

  peliculasGuardadas.forEach((valor, indice) => {
    const pelisArticle = document.createElement("article");

    pelisArticle.innerHTML = `
      <h3>${valor.titulo}</h3>
      <p>Fecha: ${valor.fecha}</p>
      <p>Puntuacion: ${valor.puntuacion}</p>
    `;

    // 🔴 BOTÓN ELIMINAR (visible)
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";

    eliminarBtn.addEventListener("click", () => {
      borrar(indice);
    });

    // 👉 primero se agrega el botón al article
    pelisArticle.appendChild(eliminarBtn);

    // 👉 después el article a la lista
    lista.appendChild(pelisArticle);
  });
}

function guardar() {
  // validacion

  let tituloInput = document.querySelector("#titulo");
  let titulo = tituloInput.value;
  if (titulo.trim() === "") {
    alert("pone un titulo valido");
    return false;
  }

  // fecha

  const fecha = new Date();
  const fechaActual = fecha.toLocaleDateString();

  // numero aleatorio de puntuacion

  let numeroAleatorio = Math.floor(Math.random() * 10 + 1);

  // objeto pelicula

  let pelicula = {
    titulo: titulo,
    fecha: fechaActual,
    puntuacion: numeroAleatorio,
  };

  // guardar objeto en array

  let guardarPelicula = JSON.parse(localStorage.getItem("peliculas"));

  if (!guardarPelicula) {
    guardarPelicula = [];
  }

  // agregar pelicula al array

  guardarPelicula.push(pelicula);

  // guaradr todo en el local storage

  localStorage.setItem("peliculas", JSON.stringify(guardarPelicula));

  // limpiar campo de texto

  tituloInput.value = "";

  // mostrar peliculas

  mostrar();
}

window.addEventListener("load", () => {
  mostrar();

  // evento formulario
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    guardar();
  });
>>>>>>> c674dc439ce926afeb993aa9c7f275838ec1d20f
});
