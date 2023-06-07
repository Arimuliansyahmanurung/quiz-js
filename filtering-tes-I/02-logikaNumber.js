function patternNumber() {
  let number = 7;
  let pola = "";

  for (let i = 1; i <= number; i++) {
    let numbers = i;
    for (let j = 1; j <= i; j++) {
      pola += numbers + " ";
      numbers++;
    }
    pola += "\n";
  }
  for (let k = 5; k <= number + 4; k++) {
    let numbers2 = k;
    for (let l = 5; l <= k; l++) {
      pola += numbers2 + " ";
      numbers2++;
    }
    pola += "\n";
  }
  return pola;
}

console.log(patternNumber());
