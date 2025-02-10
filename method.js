let text = `"Hello, "Good morning", Hello bro, Can you speak English`;
console.log(text.length) // 56
//Cắt chuỗi
console.log(text.substring(-10,45)) //start min = 0
console.log(text.slice(-10,45)) 
//chữ hoa - thường
console.log(text.toUpperCase()); console.log(text.toLowerCase())
// nối chuỗi
let a = "H".concat(" ","W") // "H" + " " + "W"
console.log(a)
//xóa khoảng trắng đầu và cuối : console.log(text.trim());
//xóa khoảng trắng đầu : console.log(text.trimStart());
//xóa khoảng trắng ở cuối : console.log(text.trimEnd())
let text1 = "Hello"; //5 ký tự
//kết quả ababaHello ---> (10-5) = 5 thay 5 kí tự đầu bằng ab
console.log(text1.padStart(10,"ab"))
//kết quả Helloababa ---> (10-5) = 5 thay 5 kí tự cuối bằng ab
console.log(text1.padEnd(10,"ab"))

//tạo "Số" bản sao của 1 văn bản
console.log(text1.repeat(3))
//thay thế chuỗi
console.log(text.replace("o","1")) //kí tự đầu tiên
console.log(text.replaceAll("o","1")) //toàn bộ chuỗi
//tách chuối thành mảng
console.log(text.split(",")) // 4 mảng





