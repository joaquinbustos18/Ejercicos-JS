let nums = [3, 4, 9, 10];

let condicion = nums.map((valor) => {
  return {
    numero: valor,
    esPar: valor % 2 === 0,
  };
});

console.log(condicion);
