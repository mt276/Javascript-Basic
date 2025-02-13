function getTodos(id) {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            const dataString = JSON.stringify(data);
            console.log('>>> check res: ', request);



        }
        if (this.readyState == 4 && request.status != 200) {
            const err = request.responseText
            console.log(err, undefined);
        }

    }

    request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
    request.send();

}
getTodos(1);