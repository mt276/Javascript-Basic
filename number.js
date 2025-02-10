let x = 12e3
let y = 12e-3
let z = 123.3456
let k = "123"

console.log(x)
console.log(y)
//trừ toán tử + còn lại đều sẽ chuyển thành phép toán
//trả về chuỗi, số được làm tròn theo kí hiệu mũ
console.log(x.toExponential(3))
//làm tròn thành chữ số nhất định sau dấu ,
console.log(y.toFixed(3))
//làm tròn thành chữ số nhất định tính tất cả các số (làm tròn phía trước dấu , thành số mũ)
console.log(z.toPrecision(1))
// biến được trả về dưới dạng nguyên thủy: 
console.log(x.valueOf())

//Number Method
//Number: trả về số, true = 1, false = 0 
let a = " 5 ";
console.log(Number(a))
//NaN
let b = " 5 , 10"
console.log(Number(b))
//làm tròn số đầu tiên, chữ = NaN
console.log(Number.parseInt("5.3 3"))
//trả về true nếu là số nguyên
console.log(Number.isInteger(34))
//trả về true nếu nằm trong khoảng -(2^53-1) < x < 2^53 -1
console.log(Number.isSafeInteger(34))
// trả về "số" đầu tiên
console.log(Number.parseFloat("34.3434 3 4 6"))
//chuyến đổi thành giây
console.log(Number(new Date("1970-01-01"))) //0
console.log(Number(new Date("1970-01-02")))

//Number Properties
//một hằng số biểu thị sự chênh lệch nhỏ nhất giữa hai số dấu phẩy động
console.log(Number.EPSILON)
//số lớn nhất trong JS
console.log(Number.MAX_VALUE)
//2^53 - 1
console.log(Number.MAX_SAFE_INTEGER) 
//số nhỏ nhất trong JS
console.log(Number.MIN_VALUE)
//-(2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER) 
//Infinity
console.log(Number.POSITIVE_INFINITY) 
//-Infinity
console.log(Number.NEGATIVE_INFINITY) 

