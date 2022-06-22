const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days')
    const timerHours = document.getElementById('timer-hours')
    const timerMinuts = document.getElementById('timer-minutes')
    const timerSecond = document.getElementById('timer-seconds')
    
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) /1000
        let days  = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return{timeRemaining, days, hours, minutes, seconds }
        
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()

        const fDays = getTime.days < 10 ? "0" + getTime.days: getTime.days
        const fHours = getTime.hours < 10 ? "0" + getTime.hours : getTime.hours
        const fMinutes = getTime.minutes < 10 ? "0" + getTime.minutes : getTime.minutes
        const fSeconds = getTime.seconds < 10 ? "0" + getTime.seconds : getTime.seconds

        timerDays.textContent = fDays
        timerHours.textContent = fHours 
        timerMinuts.textContent = fMinutes
        timerSecond.textContent = fSeconds

        if(getTime.timeRemaining > 0){
            setInterval(updateClock, 1000)
        }else {
            let colorStop = '#fc3868'

            clearInterval(updateClock)
            timerDays.textContent = "00"
            timerHours.textContent = "00"
            timerMinuts.textContent = "00"
            timerSecond.textContent = "00"      

            timerDays.style.color = colorStop
            timerHours.style.color = colorStop
            timerMinuts.style.color = colorStop
            timerSecond.style.color = colorStop
        }

        
    }
    
    updateClock()
    
    
 }

export default timer



// 	const fDays = days < 10 ? "0" + days : days
// 	const fHours = hours < 10 ? "0" + hours : hours
// 	const fMinutes = minutes < 10 ? "0" + minutes : minutes
// 	const fSeconds = seconds < 10 ? "0" + seconds : seconds

// 	daysBlock.textContent = fDays
// 	hoursBlock.textContent = fHours
// 	minutesBlock.textContent = fMinutes
// 	secondsBlock.textContent = fSeconds



