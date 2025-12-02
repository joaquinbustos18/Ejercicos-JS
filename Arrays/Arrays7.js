// Encontrar el número más grande

let nums = [5, 12, 3, 8];

let grande = 0;

for (let index = 0; index < nums.length; index++) {
  if (nums[index] > grande) {
    grande = nums[index];
  }
}
console.log(grande);

// ➤ Vuelta 1 (index = 0)

// nums[0] → 5

// ¿5 > 0? → Sí

// Entonces:
// grande = 5

// 👉 grande ahora vale: 5
