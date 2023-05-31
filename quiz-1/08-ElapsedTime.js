/**
 * hitung detik ke dalam day, hour, minute and seconds
 */

function getPeriodTimes(seconds) {
  if (isNaN(seconds)) {
    return seconds + " " + "is not number";
  }
  let hari = Math.floor(seconds / (60 * 60 * 24));
  let jam = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  let menit = Math.floor((seconds % (60 * 60)) / 60);
  let detik = seconds % 60;

  return hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik";
}

console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik
