function addSum(array, n) {
  const resultArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === n) {
        resultArr.push(i, j);
      }
    }
  }
  return resultArr;
}
console.log(addSum([2, 7, 11, 15], 9));
console.log(addSum([3, 2, 3], 6));
console.log(addSum([3, 2, 4], 6));
console.log(addSum([3, 3], 6));
