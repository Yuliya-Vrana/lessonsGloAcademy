const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    const popupContent = modal.querySelector('.popup-content')
    

    let count = 0
    let idInterval 

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
           const clientWidthScreen = screen.width
           if(clientWidthScreen > 768){
                console.log(clientWidthScreen)
                const animOpen = () => {
                    count++
                    idInterval = requestAnimationFrame(animOpen)
                    modal.style.display = 'block'

                    if(count < 26){
                        popupContent.style.transform = `scale(${count * 0.04}, ${count * 0.04})`
                    }else {
                        cancelAnimationFrame(idInterval)
                        count = 0
                    }                
                }
                animOpen()
            }else {
                modal.style.display = 'block'
            }
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){
        modal.style.display = 'none'  
        }     
    })
}

export default modal