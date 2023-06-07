function sumZero(array) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === 0) {
          resultArray.push(array[i], array[j], array[k]);
          return resultArray;
        }
      }
    }
  }
  return resultArray;
}

console.log(sumZero([-1, 0, 1, 2, -1, 4]));
console.log(sumZero([2, 3, 4, -1, -2]));
