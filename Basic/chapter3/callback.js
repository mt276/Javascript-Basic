console.log(`Hello world`);

let sum = (a,b, callback) => {
    let tong = a + b;

    // đặt thời gian trễ 
    setTimeout(() => {
        callback(tong);
    }, 1000);

    let i = 0;
    // giống setTimeout nhưng chạy vô hạn (look infinity)
    let timer = setInterval(() => {
        callback(tong);
        i++;
        if(i===5){
            //xóa timeout của hàm cần xóa
            clearTimeout(timer); 
        }
    }, 1000);
}

let printSum = (message) => console.log(`Sum = `, message);

sum(2,3,printSum)