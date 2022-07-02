const verification = () => {
    const inputNumber = document.querySelectorAll('.calc-block > input')
    const inputText = document.querySelectorAll('input[type=text]')
    const inputUserName = document.getElementsByName('user_name')
    const inputMess = document.querySelectorAll('.mess')
    const inputEmail = document.querySelectorAll('input[type=email]')
    const inputTel = document.querySelectorAll('input[type=tel]')

    const form1 = document.getElementById('form1')
    const form1Btn = form1.querySelector('.btn')
    let titleBlock

    const addTitle = (str) => {
        titleBlock = document.createElement('div')
        titleBlock.style.ccsText = "padding: 10px 20px"
        titleBlock.textContent = str
        form1.append(titleBlock)
    }

    const removeTitle = () => {
        if (titleBlock){
            titleBlock.remove()
        }
        
    }

    const isNumber = (str) => {
        let isError = false

        if (!/[^\d]/g.test(str.value) && str.value !== ""){
            str.value = str.value.replace(/[^\d]/g, "")
            return isError = true 
        }else {
           // alert ('Необходимо ввести число!')
        }
    }

    const isText = (str) => {
        let isError = false
        removeTitle()
        //str.value = ''
        form1Btn.removeAttribute('disabled')

        if (!/[^а-яА-Я\s\-]/g.test(str.value) && str.value !== ""){
            str.value = str.value.replace(/\s{2,}/g, " ")
            str.value = str.value.replace(/\-{2,}/g, "-")
            str.value = str.value.replace(/^\s\-]/g, "")
            str.value = str.value.replace(/\s\-$]/g, "")

            str.placeholder = str.placeholder.replace(/\s{2,}/g, " ")
            str.placeholder = str.placeholder.replace(/\-{2,}/g, "-")
            str.placeholder = str.placeholder.replace(/^\s\-]/g, "")
            str.placeholder = str.placeholder.replace(/\s\-$]/g, "")
            return isError = true 
        }else {
            form1Btn.setAttribute('disabled', 'disabled') 
            addTitle("'Необходимо ввести только кириллицу, дефис или пробел!'")
           // alert ('Необходимо ввести только кириллицу, дефис или пробел!')      
        }
    }

    const isEmail = (str) => {
        let isError = false

        if (!/[^\w\-\.\!\~\*\'@]/g.test(str) && str !== ""){
            return isError = true 
        }else {
           // alert ('Необходимо ввести латиницу, ., !, ~, *, \', @ ')
        }
    }

    const isTel = (str) => {
        let isError = false

        if (!/[^\d\-\(\)]/g.test(str.value) && str.value !== ""){
            str.value = str.value.replace(/[^\d\-\(\)]/g, "")
            return isError = true 
        }else {
            //alert ('Необходимо ввести цифры - или ()')
        }
    }

    inputNumber.forEach(item => item.addEventListener('blur', () => isNumber (item)))
    inputUserName.forEach(item => item.addEventListener('blur', () => isText (item)))
    inputText.forEach(item => item.addEventListener('blur', () => isText (item)))
    inputMess.forEach(item => item.addEventListener('blur', () => isText (item)))
    inputEmail.forEach(item => item.addEventListener('blur', () => isEmail (item.value)))
    inputTel.forEach(item => item.addEventListener('blur', () => isTel (item)))
  
    // form1Btn.addEventListener('click', () => {
    //     isText(inputText)
    //     isEmail(inputEmail)
    //     isTel(inputTel)
    // })
}


export default verification