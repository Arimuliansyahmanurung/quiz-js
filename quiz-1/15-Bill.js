/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
  let count1 = gaji1 + gaji1 * taxGaji(gaji1);
  let count2 = gaji2 + gaji2 * taxGaji(gaji2);
  let count3 = gaji3 + gaji3 * taxGaji(gaji3);
  let result = count1 + count2 + count3;
  return `Total gaji yang keluar:
Empl1 = Rp. ${gaji1} + pajak(${taxGaji(gaji1)}%) = Rp. ${count1}
Empl2 = Rp. ${gaji2} + pajak(${taxGaji(gaji2)}%) = Rp. ${count2}
Empl3 = Rp. ${gaji3} + pajak(${taxGaji(gaji3)}%) = Rp. ${count3}
Total : ${result}
`;
}

function taxGaji(gaji) {
  if (gaji >= 10000) {
    return (10 / 100).toFixed(2);
  } else if (gaji >= 1000 && gaji < 10000) {
    return (5 / 100).toFixed(2);
  } else if (gaji >= 100 && gaji < 1000) {
    return (2 / 100).toFixed(2);
  }
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */
