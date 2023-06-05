function rotateArray(array, k) {
  const leng = array.length;
  const rotation = k % leng;

  for (let i = 0; i < rotation; i++) {
    const lastIndex = array.pop();
    array.unshift(lastIndex);
  }
  return array;
}

const arr = [3, 8, 9, 7, 6];
console.log(rotateArray(arr, 3));
