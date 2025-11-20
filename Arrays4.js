// Crear un array nuevo con cada número multiplicado por su índice

let nums = [3, 7, 2, 5];
let multiplicado = [];

for (let index = 0; index < nums.length; index++) {
  multiplicado.push(nums[index] * index);
}

console.log(multiplicado);
