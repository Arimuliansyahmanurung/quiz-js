/** Display year is kabisat and display month */

function getDays(month, year) {
  if (!Number.isInteger(month)) {
    return "inputan bulan harus dalam integer";
  }
  if (!Number.isInteger(year)) {
    return "inputan tahun harus dalam integer";
  }

  let curentDate = new Date(month, year, 0);
  let days = curentDate.getDate();
  return `This month has ${days} days, ${year} adalah tahun kabisat`;
}

console.log(getDays("a", 2021)); //inputan bulan harus dalam integer
console.log(getDays("2", "year")); //inputan tahun harus dalam integer
console.log(getDays("m", "year")); //inputan bulan & tahun harus dalam integer
console.log(getDays(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8, 2021)); //This month has 31 hari
