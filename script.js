const countdown = document.querySelector('.countdown')

const launchDate = new Date('March 14, 2021 00:00:00').getTime()


const update = setInterval(() => {

    const now = new Date().getTime()
    
    let distance = launchDate - now

    console.log(distance)

})