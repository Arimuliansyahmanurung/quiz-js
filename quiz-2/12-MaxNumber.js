const numbers = [44, 131, 335, 223, 21, 66, 87];
// This syntax is not allowed. The result is NaN.

function maxNumber(arrays) {
  let max = [];
  for (let i = 1; i < arrays.length - 1; i++) {
    if (arrays[i] > max) {
      max = arrays[i];
    }
  }
  return max;
}

console.log(maxNumber(numbers));
