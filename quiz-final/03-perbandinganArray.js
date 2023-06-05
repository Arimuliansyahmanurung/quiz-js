const array1 = [
  "Mangga",
  "Apel",
  "Melon",
  "Pisang",
  "Sirsak",
  "Tomat",
  "Nanas",
  "Nangka",
  "Timun",
  "Mangga",
];

const array2 = [
  "Bayam",
  "Wortel",
  "Kangkung",
  "Mangga",
  "Tomat",
  "Kembang Kol",
  "Nangka",
  "Timun",
];

function compareArray(arr1, arr2) {
  const sameArr = [];
  const differentArr = [];

  // Mencari nilai array yang sama
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      sameArr.push(arr1[i]);
    } else {
      differentArr.push(arr1[i]);
    }
  }
  //mencari nilai yang berbeda dengan array2

  for (let j = 0; j < arr2.length; j++) {
    if (!array1.includes(arr2[j])) {
      differentArr.push(arr2[j]);
    }
  }
  return {
    same: sameArr,
    different: differentArr,
  };
}

const result = compareArray(array1, array2);
console.log(result.same);
console.log(result.different);
