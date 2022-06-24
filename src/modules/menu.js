const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = document.querySelector('.close-btn')
    const menuItems = document.querySelectorAll('ul>li>a')

    const handlmenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handlmenu)
    closeBtn.addEventListener('click', handlmenu)
    menuItems.forEach(menuItem => menuItem.addEventListener('click', handlmenu))
} 

export default menu