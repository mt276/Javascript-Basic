//bất đồng bộ - asynchronous - ES7

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
const getNewTodo = async (id) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log(`>>> check response: `, response);
        if (response && response.status != 200) {
            throw new Error(`Something wrongs with status code: `, response.status);
        }
        let data = await response.json();
        return data; //resolve
    } catch (e) {
        console.log(`>>> check get data:, `, e.message);
    }
}
getNewTodo(2).then(data => {
    console.log(`>>> check data:`, data);
}).catch(err => {
    console.log(`>>check error`, err.message);
})