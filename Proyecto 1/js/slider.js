let btnPrev = document.querySelector(".slider__btn-prev");
let btnNext = document.querySelector(".slider__btn-next");
let slides = document.querySelectorAll(".slides__item");

let contador = 0;
let allSlides = slides.length;

// boton siguiente
btnNext.addEventListener("click", () => {
  contador++;

  if (contador >= allSlides) {
    contador = 0;
  }
  clearActives();
  slides[contador].classList.add("slides__item--active");
});

// boton anteriror
btnPrev.addEventListener("click", () => {
  contador--;

  if (contador < 0) {
    contador = allSlides - 1; //asi calculo ultimo slide
  }
  clearActives();
  slides[contador].classList.add("slides__item--active");
});

// limpiar actives

let clearActives = () => {
  slides.forEach((valor) => {
    valor.classList.remove("slides__item--active");
  });
};
