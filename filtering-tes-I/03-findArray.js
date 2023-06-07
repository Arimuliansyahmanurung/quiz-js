function findIndex(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === index) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(findIndex([1, 2, 4], 4));
console.log(findIndex([-1, 2, 5, 6, 7], 6));
