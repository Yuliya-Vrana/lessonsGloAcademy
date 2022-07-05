const menu = () => {
    const body = document.querySelector('body')
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')

    menuBtn.addEventListener('click',  (e) => menu.classList.toggle('active-menu'))

    menu.addEventListener('click',  (e) => {
            e.preventDefault()
            if(e.target.matches('.close-btn') || 
               e.target.matches('ul>li>a') 
              //!e.target.matches('menu') && menu.className == 'active-menu' && !e.target.matches('ul>li')
              )
            {
               menu.classList.toggle('active-menu')  
            }
    })
   
    // body.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     if(e.target.matches('.close-btn') || 
    //        e.target.matches('ul>li>a') ||
    //        e.target.closest('.menu') )
    //       // !e.target.matches('menu') && menu.className == 'active-menu' && !e.target.matches('ul>li'))
    //     {
    //        menu.classList.toggle('active-menu')  
    //        console.log(e.target.matches('ul>li>a'))  
    //     }
    // })
} 

export default menu