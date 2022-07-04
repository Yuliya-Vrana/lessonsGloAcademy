const verification = () => {
    const inputNumber = document.querySelectorAll('.calc-block > input')
    const inputEmail = document.querySelectorAll('input[type=email]')
    const inputTel = document.querySelectorAll('input[type=tel]')
    // input[type=text] нельзя, так как в калькуляторе тогда вообще ничего не вводится

    const form1 = document.getElementById('form1')
    const nameForm1 = form1.querySelectorAll('input[type=text]')
    const form2 = document.getElementById('form2')
    const nameForm2 = form2.querySelectorAll('input[type=text]')
    const form3 = document.getElementById('form3')
    const nameForm3 = form3.querySelectorAll('input[type=text]')

    inputNumber.forEach((item) => {
        item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^\d]/g, ''))
    })

    nameForm1.forEach(item => {
        item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^а-яА-Я\s\-]/g, ''))
    })

    nameForm2.forEach(item => {
        item.addEventListener('input', (e) => item.value = e.target.value.replace(/[^а-яА-Я\s\-]/g, ''))
    }) 

    nameForm3.forEach(item => {
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


