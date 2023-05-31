/**
 * hitung sales discount plus tax rate
 * function getSalesDiscount
 */

function getSalesDiscount(price, tax, discount) {
  if (isNaN(price, tax, discount)) {
    return "Price, tax , & discount harus dalam angka";
  } else if (isNaN(price)) {
    return "price harus dalam angka";
  } else if (isNaN(tax)) {
    return "Pajak harus dalam angka";
  }
  const totalDiscount = (price * discount) / 100;
  const totalPrice = price - totalDiscount;
  const totalTax = totalPrice * (tax / 100);

  const result = totalPrice + totalTax;

  return result;
}

console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10, 5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */
