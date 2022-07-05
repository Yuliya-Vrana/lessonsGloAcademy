const sendForm = ({formId, someElem = []}) => {
    const forms = document.querySelectorAll('form')

    forms.forEach(item => {
        
    })

    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется.'

    // const validate = (list) => {
    //     let success = true

    //     list.forEach(input => {
    //         if (!input.classList.contains('success')){
    //             success = false
    //         }
    //     })

    //     return success
    // }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'ContentType': 'application/json'
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements =form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)
        
        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if(elem.type === 'block'){
                formBody[elem.id] = element.textContent       
            }else if (elem.type === 'input'){
                formBody[elem.id] = element.value 
            }
        })
        sendData(formBody)
            .then(data => console.log(data))
            .then(data => {

                statusBlock.textContent = successText  

                formElements.forEach(input => input.value = '')
            }) 
            .catch(error => {
                statusBlock.textContent = errorText 
            })

        // if(validate(formElements)){
        //     sendData(formBody)
        //     .then(data => console.log(data)) 
        // }else {
        //     alert('Данные не валидны')
        // }       
       
    }

    try {
        if(!form){
            throw new Error('Верните форму на место!')
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault()

            submitForm() 

        })  
    } catch (error) {
        console.log(error.massege)
    }


  
}

export default sendForm