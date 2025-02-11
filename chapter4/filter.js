console.log(`Hello world`);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr1 = [
    { name : `A` , age : 20, address: `HCM`},
    { name : `B` , age : 25, address: `HN`},
    { name : `C` , age : 26, address: `CB`},
    { name : `D` , age : 30, address: `VT`},
    { name : `E` , age : 23, address: `QN`}
];

//filter, find
let filter = arr.filter((item,index) => {
    return item && item > 5;
})
console.log(filter);
let filterName = arr1.filter(item => {
    return item && item.age >= 25;
})
let filterAddress = arr1.filter(item => item && item.age < 25)
console.log(filterName);
console.log(filterAddress);

