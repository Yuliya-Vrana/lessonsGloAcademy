const slider = (activeSlide = '.slide-active', activeDot = '.dot-active') => {

    if(activeSlide == null || activeDot == null){
        return
    }else {
        const sliderBlock = document.querySelector('.portfolio-content')
        const slides = document.querySelectorAll('.portfolio-item')
        
        const dotsList = document.querySelector('.portfolio-dots')
        
        
        let timeInterval = 2000
        let currentSlide = 0
        let interval 
        let dot
    
        const addDots = () => {
            for (let i=0; i < slides.length; i++){
                dot = document.createElement('li') 
                dot.classList.add('dot')
                dotsList.append(dot)          
            }
        }
        
        const prevSlide = (elems,index, strClass) => {
            elems[index].classList.remove(strClass)
        }
    
        const nextSlide = (elems,index, strClass) => {
            elems[index].classList.add(strClass)
        }
    
        const autoSlide = () => {
    
            const dots = document.querySelectorAll('.dot')
            prevSlide(slides, currentSlide, activeSlide)
            prevSlide(dots, currentSlide, activeDot)
            currentSlide++
    
            if(currentSlide >= slides.length) {
                currentSlide =0
            }
            nextSlide(slides, currentSlide, activeSlide)
            nextSlide(dots, currentSlide, activeDot)
        }
        
        const startSlide = (timer = 1500) => {
            
            interval = setInterval(() => autoSlide(), timer)
        }
    
        const stopSlide = () => {
            clearInterval(interval)
        }
    
        sliderBlock.addEventListener('click', (e) => {
            e.preventDefault()
            const dots = document.querySelectorAll('.dot')
            if(!e.target.matches('.dot, .portfolio-btn')){
                return
            }
    
            prevSlide(slides, currentSlide, activeSlide)
            prevSlide(dots, currentSlide, activeDot)
    
            if(e.target.matches('#arrow-right')){
                currentSlide++
            }else if(e.target.matches('#arrow-left')){
                currentSlide--
            }else if(e.target.classList.contains('dot')){
                dots.forEach((dot, index) => {
                    if(e.target === dot){
                        currentSlide = index
                    }
                })
            }
    
            if(currentSlide < 0) {
                currentSlide = slides.length - 1 
            }
            nextSlide(slides, currentSlide, activeSlide)
            nextSlide(dots, currentSlide, activeDot)
    
        })
    
        sliderBlock.addEventListener('mouseenter', (e) => {
            if(e.target.matches('.dot, .portfolio-btn')){
                stopSlide()
            }
        }, true )
    
        sliderBlock.addEventListener('mouseleave', (e) => {
            if(e.target.matches('.dot, .portfolio-btn')){
                startSlide(timeInterval)
            }
        },true )
    
        addDots()
        startSlide(timeInterval)
    }
   
}

export default slider