const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется.'
    const emptyText = 'Заполните пустые поля!'

    const validate = (list) => {
        let success = true

        list.forEach(input => {
            if (input.value == ''){
                success = false
            }
        })

        return success
    }

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
        statusBlock.classList.add('titleBlock')
        statusBlock.style.color = '#fff'
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



        if(validate(formElements)){
            sendData(formBody)
             .then(data => {

                statusBlock.textContent = successText  
                formElements.forEach(input => input.value = '')
                
                setTimeout(() => {
                    const modal = document.querySelector('.popup')
                    const divBlock = document.querySelectorAll('.titleBlock')
                    modal.style.display = 'none'
                    statusBlock.remove()
                    divBlock.textContent = ''
                   // console.log(divBlock)
                }, 3000)

            }) 
            .catch(error => {
                statusBlock.textContent = errorText 
            })
 
        }else {
            statusBlock.textContent = emptyText
        }       
       
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