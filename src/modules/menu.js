const menu = () => {
    const body = document.querySelector('body')
    const menu = document.querySelector('menu')
   
    body.addEventListener('click', (e) => {
        if(e.target.closest('.menu') || !e.target.matches('menu') && menu.className == 'active-menu' ||
           e.target.matches('.close-btn') ||  e.target.matches('ul>li>a'))
           {
           menu.classList.toggle('active-menu')    
        }
    })
} 

export default menu