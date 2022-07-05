import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import scroll from './modules/scroll'
import verification from './modules/verification'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

menu()
modal()
scroll()
verification()
tabs()
slider('portfolio-item-active', 'dot-active')
calc(100)
sendForm({ 
        formId:'form1',
        someElem: [
            {
                type: 'block',
                id: 'total'
            }
        ] 
    })
sendForm({
        formId:'form2',
        someElem: [
            {
                type: 'block',
                id: 'total'
            },
            {
                type: 'input',
                id: 'form2-message'
            },
            
        ]    
    })
sendForm({
        formId:'form3',
        someElem: [
            {
                type: 'block',
                id: 'total'
            }
        ] 
    }
    
)