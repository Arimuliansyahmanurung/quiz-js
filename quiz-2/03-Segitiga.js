/** buat segitiga  */

for (let i = 4; i >= 1; i--) {
  let temp = "";
  for (let j = 1; j <= i; j++) {
    temp += j + " ";
  }
  console.log(temp);
}
// output
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let k = 5; k >= 1; k--) {
  let temp2 = "";
  for (let l = k; l >= 1; l--) {
    temp2 += l + " ";
  }
  console.log(temp2);
}

// output
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
