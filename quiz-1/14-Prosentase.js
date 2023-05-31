/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start, end) {
  if (isNaN(start) || isNaN(end)) {
    return start + " " + end + " " + "harus dalam angka";
  }

  let difference = end - start;
  let count = (difference / start) * 100;
  if (count > end) {
    return "Total kenaikan income " + Math.floor(count) + " %";
  } else {
    return "Total Penurunan income " + Math.floor(count) + " %";
  }
}

console.log(getProsentase("abc", "bca")); //abc or bca harus dalam angka
console.log(getProsentase(600000.0, 750000.0)); //Total kenaikan income 25%
console.log(getProsentase(750000.0, 650000.0)); //Total penurunan income -14%
