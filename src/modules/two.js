const timeNow = () => {
       const timeNow = document.getElementById('day-time-now')

       const getTime = () => {
           let time = new Date()
           return time
       }

       const showTime = () => {
           let show = getTime ()
           let fShow = show.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
           timeNow.textContent = fShow
       }

       showTime()
}

export default timeNow