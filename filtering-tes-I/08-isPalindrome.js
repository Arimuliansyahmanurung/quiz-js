function isPalindrome(array) {
  const length = array.length;
  for (let i = 0; i < length / 2; i++) {
    if (array[i].toLowerCase() !== array[length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(["asep", "budi", "-", "budi", "asep"]));
console.log(isPalindrome(["Tom", "Tim", "tim", "tom"]));
console.log(isPalindrome(["tik", "tok", "toko", "tik"]));
