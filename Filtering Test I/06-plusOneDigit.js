function plusOneDigit(array) {
  let i = array.length - 1;
  while (i >= 0) {
    if (array[i] < 9) {
      array[i]++;
      return array;
    } else {
      array[i] = 0;
      i--;
    }
  }
  array.unshift(1);
  return array;
}

console.log(plusOneDigit([1, 2, 3]));
console.log(plusOneDigit([4, 3, 2, 1]));
console.log(plusOneDigit([9]));
