function maxWordLength(params) {
  let kata = params.split(" ");
  let maxLength = "";

  for (let i = 0; i < kata.length; i++) {
    let kata2 = kata[i];
    if (kata2.length > maxLength.length) {
      maxLength = kata2;
    }
  }
  return maxLength;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp
