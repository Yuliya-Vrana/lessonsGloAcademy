const hello = () => {
    const hello = document.getElementById('hello')

    const getTime = () => {
    let time = new Date()
    let hours = time.getHours()
    return hours
    }

    const showTime = () => {
        let timeDay = getTime ()
        
        if(+timeDay >= 5 && +timeDay < 12 ){
            hello.textContent = 'Доброе утро!'
        }else if(+timeDay >= 12 && +timeDay < 17 ){
            hello.textContent = 'Добрый день!'
        }else if(+timeDay >= 17 && +timeDay < 23 ){
            hello.textContent = 'Добрый вечер!'
        }else if(+timeDay >= 23 && +timeDay < 5 ){
            hello.textContent = 'Доброй ночи'
        }
    }

    showTime()
    console.log('hello')
}

export default hello