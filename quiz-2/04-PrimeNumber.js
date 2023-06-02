function showPrimeNumber(n) {
  let number = 2;
  let pola = "";
  for (let i = 0; i <= n; i++) {
    while (!isPrime(number)) {
      number++;
    }
    pola += number + "\t";
    number++;
  }
  return pola;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  let result = Math.sqrt(n);
  for (let i = 2; i <= result; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(showPrimeNumber(100));

/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */
