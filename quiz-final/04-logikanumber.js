function patternNumber() {
  let number = 7;
  let temp = "";

  for (let i = 1; i <= number; i++) {
    let numbers = i;
    for (let j = 1; j <= i; j++) {
      temp += numbers + " ";
      numbers++;
    }
    temp += "\n";
  }
  for (let k = 5; k <= number + 4; k++) {
    let numbers2 = k;
    for (let l = 5; l <= k; l++) {
      temp += numbers2 + " ";
      numbers2++;
    }
    temp += "\n";
  }
  return temp;
}

console.log(patternNumber());
