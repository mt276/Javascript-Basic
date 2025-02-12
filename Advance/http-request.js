const callback = (err, data) => {
    if (err) {
        console.log(`calling back with err: `, err, data);
    }
    if (data) {
        console.log(`calling back with data: `, err, data);
    }
}
function getTodos(callback) {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && request.status === 200) {
            const data = request.responseText;
            //console.log('>>> check res: ', request);
            callback(undefined, data);
        }
        if (this.readyState == 4 && request.status != 200) {
            const err = request.responseText
            console.log(err, undefined);
        }

    }

    request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    request.send();
}

getTodos(callback); 