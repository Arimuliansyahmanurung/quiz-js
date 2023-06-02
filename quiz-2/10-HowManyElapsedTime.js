/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  let count = 0;
  for (let year = year1; year <= year2; year++) {
    if (isKabisat(year)) {
      count++;
    }
  }
  return count;
}

function isKabisat(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(howManyKabisat(1997, 2021));
