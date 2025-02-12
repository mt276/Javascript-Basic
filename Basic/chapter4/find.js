console.log(`Hello world`);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr1 = [
    { name : `A` , age : 20, address: `HCM`},
    { name : `B` , age : 25, address: `HN`},
    { name : `C` , age : 26, address: `CB`},
    { name : `D` , age : 30, address: `VT`},
    { name : `E` , age : 23, address: `QN`}
];

//find - trả về số, mảng đầu tiên đáp ứng điều kiện
let find = arr.find((item,index) => {
    return item > 2;
})
let findName = arr1.find(item => {
    return item && item.age >= 25;
})
let findAddress = arr1.find(item => item && item.age < 25)

console.log(find);
console.log(findName);
console.log(findAddress);
