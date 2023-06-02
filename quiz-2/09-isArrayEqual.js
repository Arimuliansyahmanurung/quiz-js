function isArraysEqual(arrayA, arrayB) {
  let temp = false;
  if (
    (Array.isArray(arrayA) && Array.isArray(arrayB)) ||
    arrayA.length === arrayB.length
  ) {
    if (arrayA.every((v, i) => v === arrayB[i])) {
      return true;
    }
  }
  return temp;
}

const fruitNamesA = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesB = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesC = ["anggur", "apel", "mangga", "alpukat"];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
