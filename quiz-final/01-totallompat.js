function totalLompat(x, y, k) {
  let totalLompatan = 0;

  while (x < y) {
    x += k;
    totalLompatan++;
  }

  return totalLompatan;
}

console.log(totalLompat(10, 85, 30));
