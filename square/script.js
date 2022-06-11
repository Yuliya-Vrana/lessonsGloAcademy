'use script';

const eBtn = document.getElementById('e_btn')
const btn = document.getElementById('btn')
const text = document.getElementById('text')
const range = document.getElementById('range')
const rangeSpan = document.getElementById('range-span')
const square = document.getElementById('square')
const circle = document.getElementById('circle')



const getBackgraundColor = function(event){
    let colorBg =  event.target.value
    square.style.backgroundColor = colorBg
}

const getCircleRange = function(event){
    rangeSpan.textContent = event.target.value 
    circle.style.width = rangeSpan.textContent + '%'
    circle.style.height = rangeSpan.textContent + '%'
}

text.addEventListener('change', getBackgraundColor)
range.addEventListener('change', getCircleRange)

eBtn.style.display = 'none'