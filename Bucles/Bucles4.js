// Ejercicio:
// Pedir una palabra (o usar una fija) y contar cuántas veces aparece la letra "a".

let palabra = "agustina ";
let letrasA = 0;

for (let index = 0; index < palabra.length; index++) {
  if (palabra[index] === "a") {
    letrasA++;
    console.log("tu palabra tiene " + letrasA + palabra[index]);
  }
}

// Logica explicada por mi:

// primero tenemos una variable con nuestra palabra
// despues una segunda variable con un contador para cada 'A'
// luego recorremos nuestra palabra 'agustina'
// por cada index que sea igual a 'a', le sumamos 1 a la variable letrasA
