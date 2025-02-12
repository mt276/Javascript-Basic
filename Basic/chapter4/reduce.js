let arr = [1, 2, 3, 4]
let reducer = (previousValue, currentValue, currentIndex, array) => previousValue + currentValue;
console.log(arr.reduce(reducer));
console.log(arr.reduce(reducer, 10));