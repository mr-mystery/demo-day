let Consumed = localStorage.getItem("Consumed");
let Burned = localStorage.getItem("Burned");
let Walked = localStorage.getItem("Walked");
let exerciseTime = localStorage.getItem("exerciseTime");
let DaDate = localStorage.getItem('Date')
let DaTime = localStorage.getItem('Time')

c(Consumed)
c(Burned)
c(Walked)
c(exerciseTime)

const CaloriesGained = document.getElementById('TCG')
const CalorieBurned = document.getElementById('TCB')
const Calorie = document.getElementById('TC')
const walked = document.getElementById('TMW')
const time = document.getElementById('TTSP')
const mt = document.getElementById('MT')
const CPM = document.getElementById('CPM')
const last = document.getElementById('last')

CaloriesGained.innerHTML = Consumed
CalorieBurned.innerHTML = Burned
Calorie.innerHTML = (Consumed - Burned)
walked.innerHTML = Walked
time.innerHTML = exerciseTime
mt.innerHTML = Walked/exerciseTime
CPM.innerHTML = Burned / exerciseTime
last.innerHTML = `${DaDate} at ${DaTime}`

// Dont ask
function c (e) {
    console.log(e)
}

c(Consumed)

c('Joshua why')