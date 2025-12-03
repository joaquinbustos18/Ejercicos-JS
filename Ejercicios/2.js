/*
Crea una lista de la compra en la que el usuario pueda añadir
nuevos productos para comprar con un campo de texto y un botón.

Cada vez que se añade un producto, este aparece
en la lista con un botón para eliminarlo.

El usuario podrá añadir tantos productos como quiera.
Cada producto añadido tiene un botón para borrarlo de la lista.
*/

let inputTexto = document.querySelector(".texto");
let agregar = document.querySelector(".botonAgregar");

let lista = document.querySelector(".lista");

function productosLista(producto) {
  let li = document.createElement("li");
  li.textContent = producto;
  let botonEliminar = document.createElement("button");
  botonEliminar.innerHTML = "X";
  li.appendChild(botonEliminar);

  botonEliminar.addEventListener("click", () => {
    li.remove();
  });

  return li;
}

agregar.addEventListener("click", () => {
  let texto = inputTexto.value;

  let agregarProducto = productosLista(texto);

  lista.appendChild(agregarProducto);

  inputTexto.value = "";
});
