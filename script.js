const getData = () => {
    return fetch('heroes/dbHeroes.json')
        .then(response => response.json())
}

document.addEventListener("DOMContentLoaded", () => {
    getData()
       .then(data => console.log(data))
       .catch(error => console.log(error))

})
