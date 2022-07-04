import { animate } from "./helper";

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const popupContent = modal.querySelector('.popup-content')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
           const clientWidthScreen = screen.width
       
           if(clientWidthScreen > 768){
                modal.style.display = 'block' 
                animate({
                    duration: 500,
                    timing(timeFraction){
                        return timeFraction
                    },
                    draw(progress){
                        //popupContent.style.transform = `scale(${progress * 1}, ${progress * 1})`
                        popupContent.style.opacity = progress  
                    }
                })

            }else {
                modal.style.display = 'block'
            }
        })
    })

    modal.addEventListener('click', (e) => {
        const clientWidthScreen = screen.width

        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){
            modal.style.display = 'none'    
        }     
    })
}

export default modal





                // const animOpen = () => {
                //     count++
                //     idInterval = requestAnimationFrame(animOpen)
                //     modal.style.display = 'block'

                //     if(count < 26){
                //         popupContent.style.transform = `scale(${count * 0.04}, ${count * 0.04})`
                //     }else {
                //         cancelAnimationFrame(idInterval)
                //         count = 0
                //     }                
                // }
                // animOpen()