'use strict';

const adv = document.querySelector('.adv')
const books = document.querySelectorAll('.book')
const body = document.querySelector('body')
const elemsBook02 = books[0].querySelectorAll('li')
const titleBook03 = books[4].querySelector('a')
const elemsBook05 = books[5].querySelectorAll('li')
const elemsBook06 = books[2].querySelectorAll('li')

books[0].before(books[1])
books[2].before(books[4])
books[3].after(books[2])
books[5].after(books[2])

titleBook03.innerHTML = 'Книга 3. this и Прототипы Объектов'

body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)'

let newElem = document.createElement('li')
newElem.textContent = 'Глава 8: За пределами ES6'
elemsBook06[9].insertAdjacentElement('beforebegin', newElem)

elemsBook02[10].before(elemsBook02[2])
elemsBook02[2].before(elemsBook02[9])
elemsBook02[9].before(elemsBook02[7])
elemsBook02[7].before(elemsBook02[5])
elemsBook02[5].before(elemsBook02[4])
elemsBook02[4].before(elemsBook02[8])
elemsBook02[8].before(elemsBook02[6])
elemsBook02[6].before(elemsBook02[3])
elemsBook02[3].before(elemsBook02[1])

elemsBook05[10].before(elemsBook05[8])
elemsBook05[8].before(elemsBook05[5])
elemsBook05[5].before(elemsBook05[7])
elemsBook05[7].before(elemsBook05[6])
elemsBook05[6].before(elemsBook05[2])
elemsBook05[2].before(elemsBook05[4])
elemsBook05[4].before(elemsBook05[3])
elemsBook05[3].before(elemsBook05[9])
elemsBook05[9].before(elemsBook05[1])
elemsBook05[1].before(elemsBook05[0])


adv.style.display = "none"

