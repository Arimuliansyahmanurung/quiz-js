function insertInt(array, value, index) {
  const newArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (i === index) {
      newArray.push(value);
    }
    if (array[i] === undefined) {
      break;
    }
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(insertInt([4, 7, 1, 20], 9, 3));
console.log(insertInt([3, 5, 2], 7, 3));
