const scroll = () => {
    const links = document.querySelectorAll('ul>li>a')
    const btnScroll = document.querySelector('main > a')
    

    const scrolling = (event, section) => {
        event.preventDefault();                          //перехватить действие у браузера
          
        if (section) {
            section.scrollIntoView({
                block: "start",
                behavior: "smooth"               
            })
        }  
    }

    links.forEach((link) => {
        const section = document.querySelector(link.getAttribute("href"))
        link.addEventListener('click', () => scrolling(event, section))
    })

    btnScroll.addEventListener('click', () =>{
        const section = document.querySelector(btnScroll.getAttribute("href"))
        scrolling(event, section)})
}

export default scroll