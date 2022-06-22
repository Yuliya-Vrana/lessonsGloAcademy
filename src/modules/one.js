 const time = (deadline) => {

        const newYear = document.getElementById('new-year')
        const dayNewYear = document.getElementById('day-new-year')

        const getTimeRemaining = () => {
            let dateStop = new Date(deadline).getTime()
            let dateNow = new Date().getTime()
            let timeRemaining = (dateStop - dateNow) /1000
            let days  = Math.floor(timeRemaining / 60 / 60 / 24)
    
            return{timeRemaining, days}    
        }

        const updateClock = () => {
            let getTime = getTimeRemaining()
        
            dayNewYear.textContent = getTime.days
    
            if(getTime.timeRemaining > 0){
                setInterval(updateClock, 1000)
            }else {
                newYear.textContent = "С новым годом!"
            }      
        }
        updateClock()

 }


export default time