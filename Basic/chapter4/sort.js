const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);
//[ 1, 100000, 21, 30, 4 ] 
console.log(array1);