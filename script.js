const countdown = document.querySelector('.countdown')

const launchDate = new Date('March 14, 2021 00:00:00').getTime()


const update = setInterval(() => {

    const now = new Date().getTime()
    
    let distance = launchDate - now


    const days = Math.floor(distance / (1000* 60* 60* 24))

    const hours = Math.floor((distance%(1000* 60* 60* 24)) / (1000* 60* 60))

    const mins = Math.floor((distance%(1000* 60* 60)) / (1000* 60))

    const sec = Math.floor((distance%(1000* 60)) / 1000)


    countdown.innerHTML = `
    
    <div>${days}<span>Days</span></div>
    
    <div>${hours}<span>Hours</span></div>
    
    <div>${mins}<span>Minutes</span></div>
    
    <div>${sec}<span>Seconds</span></div>
    
    `

}, 1000)