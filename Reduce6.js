// Contar cuántos números pares hay

let nums = [1, 2, 5, 8, 10];

let pares = nums.reduce((acc, valor) => {
  if (valor % 2 === 0) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);
console.log(pares);
