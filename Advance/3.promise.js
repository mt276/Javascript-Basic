//promise : tránh callback hell, code dễ đọc
//giúp thực thi các tác vụ bất đồng bộ theo tuần tự
//Nó đại diện cho một giá trị có thể chưa có ngay lập tức, nhưng sẽ có trong tương lai (thành công hoặc thất bại).
function getTodos(id) {

    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (this.readyState == 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                const dataString = JSON.stringify(data);
                resolve(data)

            }
            if (this.readyState == 4 && request.status != 200) {
                reject(`Error`)
            }

        }

        request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
        request.send();
    })
}

//promise example

const promiseExp = () => {
    return new Promise((resolve, reject) => {
        resolve({ name: "A", age: 25 })
        reject(`something wrongs`)
    });
}
promiseExp().then(data => {
    console.log(data)
})
    .catch(error => {
        console.log(error);
    });

getTodos(1).then(data => {
    console.log(data);
    getTodos(2).then(data => {
        console.log(data);
    })
}).catch(err => {
    console.log(err);
})

//chaining promises
getTodos(1).then(data1 => {
    console.log(`Data1: `, data1);
    return getTodos(2);
}).then(data2 => {
    console.log(`Data2: `,data2);
    return getTodos(3)
}).then(data3 => {
    console.log(`Data3: `,data3);
}).catch(err => {
    console.log(`>>>`,err);
})