const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinuts = document.getElementById('timer-minutes')
    const timerSecond = document.getElementById('timer-seconds')
    
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) /1000
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return{timeRemaining, hours, minutes, seconds }
        
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()

       
        const fHours = getTime.hours < 10 ? "0" + getTime.hours : getTime.hours
        const fMinutes = getTime.minutes < 10 ? "0" + getTime.minutes : getTime.minutes
        const fSeconds = getTime.seconds < 10 ? "0" + getTime.seconds : getTime.seconds

        timerHours.textContent = fHours 
        timerMinuts.textContent = fMinutes
        timerSecond.textContent = fSeconds

        if(getTime.timeRemaining > 0){
            setInterval(updateClock, 1000)
        }else {
            let colorStop = '#fc3868'

            clearInterval(updateClock)
            timerHours.textContent = "00"
            timerMinuts.textContent = "00"
            timerSecond.textContent = "00"      

            timerHours.style.color = colorStop
            timerMinuts.style.color = colorStop
            timerSecond.style.color = colorStop
        }      
    }
    updateClock()
 }

export default timer
