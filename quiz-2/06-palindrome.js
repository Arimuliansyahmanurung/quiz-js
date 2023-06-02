function isPalindrome(word) {
  const kata = word.toLowerCase().replace(/\s/g, "");
  const length = kata.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (kata[i] !== kata[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("kasur ini rUsak")); //true
