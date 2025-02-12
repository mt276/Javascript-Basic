let text = `"Hello, "Good morning", Hello bro, Can you speak English`;
console.log(text.length) // 56

//Tìm kiếm chuỗi
//vị trí đầu tiên của chuỗi được tìm (index -> end) (nếu k có trả về -1)
console.log(text.indexOf("He",0)) 
//vị trí cuối cùng của chuỗi được tìm (index -> start) (nếu k có trả về -1)
console.log(text.lastIndexOf("He",54)) 
//vị trí đầu tiên(nếu k có trả về -1)
console.log(text.search("He")) 
//trả về mảng ở vị trí đầu tiên
console.log(text.match("G")) 
//trả về tất cả mảng có vị trí khớp
let a = text.matchAll("Hello")
console.log(Array.from(a)) 
//trả về true nếu có 
console.log(text.includes("G"))
//trả về true nếu vị trí đầu khớp với "Hello"
console.log(text.startsWith("Hello",1))
//trả về true nếu 6 kí tự đầu kết thúc bằng "Hello"
console.log(text.endsWith("Hello",6))
  

