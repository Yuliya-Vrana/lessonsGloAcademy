const getData = () => {
    fetch('db.json')
        .then(response => response.json())
}

const sendData = (url) => {
    return fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "user": "Vlad",
                "age": 33,
                "role": "developer"
            }),
            headers: {
                'Content-type': 'application/json; charset-UTF-8',
            },
    }).then(response => response.json())
}

document.addEventListener("DOMContentLoaded", () => {
    getData()
        .then(data => console.log(data))
        .catch(error => console.log(error))
    sendData('https://jsonplaceholder.typicode.com/posts')
        .then(data => console.log(data))
        .catch(error => console.log(error))
})
