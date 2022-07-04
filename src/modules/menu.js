const menu = () => {
    const body = document.querySelector('body')
    const menu = document.querySelector('menu')
   
    body.addEventListener('click', (e) => {
        if(e.target.matches('.close-btn') || 
           e.target.matches('ul>li>a') ||
           e.target.closest('.menu') ||
           !e.target.matches('menu') && menu.className == 'active-menu' && !e.target.matches('ul>li'))
        {
           menu.classList.toggle('active-menu')  
           console.log(e.target.matches('ul>li>a'))  
        }
    })
} 

export default menu