/** ubah value string ke date
 *  gunakan split
 *  inputan s = bulan/hari/tahun
 */

function strToDate(s) {
  let pars = s.split("/");
  let bulan = parseInt(pars[0], 10);
  let hari = parseInt(pars[1], 10);
  let tahun = parseInt(pars[2], 10);

  if (isNaN(bulan) || isNaN(hari) || isNaN(tahun)) {
    return s + " bad for Date";
  }

  let d = new Date(Date.UTC(bulan, hari, tahun));
  let date = d.toString();
  return date;
}

console.log(strToDate("12/30/2021")); //Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate("12/aa/bb")); //12/aa/bb bad format date
