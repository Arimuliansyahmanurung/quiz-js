/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money, type) {
  if (typeof money !== "number" || isNaN(money)) {
    return "is not a number";
  }
  let jumlah;

  switch (type) {
    case "yen":
      jumlah = 107.2;
      break;
    case "usd":
      jumlah = 14993.85;
      break;
    case "euro":
      jumlah = 15998.47;
      break;
    default:
      return "no match type currency";
  }
  let konversi = money * jumlah;
  let formatRupiah = new Intl.NumberFormat("IDR").format(konversi);

  return money + " " + type + " = " + formatRupiah;
}

console.log(convertToRupiah(1000, "yen")); //1000 yen  = Rp.130.120
console.log(convertToRupiah(100, "usd")); //100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100, "euro")); //100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100, "")); //no match type currency
