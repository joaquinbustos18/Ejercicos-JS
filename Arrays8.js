// Crear un array con solo los números pares

let nums = [3, 8, 11, 14, 5, 2];

let pares = [];

for (let index = 0; index < nums.length; index++) {
  if (nums[index] % 2 === 0) {
    pares.push(nums[index]);
  }
}
console.log(pares);
