// Dado ["pan", "tomate", "lechuga", "queso"], mostr á solo los elementos que tengan más de 5 letras.

let sandwich = ["pan", "tomate", "lechuga", "queso"];

sandwich.forEach((valor) => {
  if (valor.length >= 5) {
    console.log(valor);
  }
});
