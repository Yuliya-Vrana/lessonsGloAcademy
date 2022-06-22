const timeToday = () => {
    const todayData = document.getElementById('today-data')

    const getTime = () => {
        let date = new Date
        return date
    }

    const showTime = () => {
        let dayWeek = getTime()
        const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']

        week.forEach((item, i) => {
            if(i == +dayWeek.getDay()-1){
               todayData.textContent = item
            }
        })               
    }
    showTime()
}

export default timeToday