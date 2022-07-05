const getData = () => {
    fetch('heroes/dbHeroes.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

document.addEventListener("DOMContentLoaded", () => {
    getData()
      // .then(data => console.log(data))
       // .catch(error => console.log(error))

})
