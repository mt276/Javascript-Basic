//callback hell bao gồm các callback lồng nhau, rất khỏ bảo trì

const callback = (err, data) => {
    if (err) {
        console.log(`calling back with err: `, err);
    }
    if (data) {
        console.log(`calling back with data: `, data);
    }
}
function getTodos(id, callback) {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            const dataString = JSON.stringify(data);
            //console.log('>>> check res: ', request);
            // callback(undefined, data);
            // callback(undefined, dataString);
            callback(undefined, request.responseText)

        }
        if (this.readyState == 4 && request.status != 200) {
            const err = request.responseText
            console.log(err, undefined);
        }

    }

    request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
    request.send();

}

getTodos(1, (err, data) => {
    if (err) {
        console.log(`calling back with err: `, err);
    }
    if (data) {
        console.log(`calling back with data: `, data);
        getTodos(2, (err, data) => {
            if (err) {
                console.log(`calling back with err: `, err);
            }
            if (data) {
                console.log(`calling back with data: `, data);
            }
        })
    }
});


