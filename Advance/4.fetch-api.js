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
        //trình duyệt sẽ gửi cookies, tokens hoặc thông tin xác thực kèm theo yêu cầu HTTP.
        request.withCredentials = true;
        request.send();
    })
}
let id = 1;
fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => {
        return response.json();
    })
    .then(data=>{
        console.log(`check fetch data: `, data);
    })