let Consumed = localStorage.getItem("Consumed");
let Burned = localStorage.getItem("Burned");
let Walked = localStorage.getItem("Walked");
let exerciseTime = localStorage.getItem("exerciseTime");

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

CaloriesGained.innerHTML = Consumed
CalorieBurned.innerHTML = Burned
Calorie.innerHTML = (Consumed - Burned)
walked.innerHTML = Walked
time.innerHTML = exerciseTime
mt.innerHTML = Walked/exerciseTime
CPM.innerHTML = Burned / exerciseTime

// Dont ask
function c (e) {
    console.log(e)
}

c(Consumed)

c('Joshua why')