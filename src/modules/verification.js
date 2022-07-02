const verification = () => {
    const inputNumber = document.querySelectorAll('.calc-block > input')
    const inputText = document.querySelectorAll('input[type=text]')
    const inputEmail = document.querySelectorAll('input[type=email]')
    const inputTel = document.querySelectorAll('input[type=tel]')


    inputNumber.forEach((item) => {
        item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^\d]/g, ''))
    })

    inputText.forEach(item => {
        item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^а-яА-Я\s\-]/g, ''))
    })

    inputTel.forEach((item) => {
        item.addEventListener('blur', (e) => item.value = e.target.value.replace(/[^()-\d]/g, ''))
    })
    
    inputEmail.forEach(item => {
        item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^\w@_.!~*'-]/gi, ''))
    })

    inputEmail.forEach(item => {
        item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^\w@_.!~*'-]/gi, ''))
    })
}


export default verification


