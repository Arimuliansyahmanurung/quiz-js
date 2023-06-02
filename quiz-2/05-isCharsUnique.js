function isCharsUnique(string) {
  const charSet = new Set();
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefga")); //false
