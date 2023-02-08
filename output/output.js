let username = localStorage.getItem("username");

let Consumed = localStorage.getItem("Consumed");
let Burned = localStorage.getItem("Burned");
let Walked = localStorage.getItem("Walked");
let exerciseTime = localStorage.getItem("exerciseTime");
let DaDate = localStorage.getItem('Date')
let DaTime = localStorage.getItem('Time')

console.log(Consumed)
console.log(Burned)
console.log(Walked)
console.log(exerciseTime)

const CaloriesGained = document.getElementById('TCG')
const CalorieBurned = document.getElementById('TCB')
const Calorie = document.getElementById('TC')
const walked = document.getElementById('TMW')
const time = document.getElementById('TTSP')
const mt = document.getElementById('MT')
const CPM = document.getElementById('CPM')
const last = document.getElementById('last')

CaloriesGained.innerHTML = Consumed;
CalorieBurned.innerHTML = Burned;
Calorie.innerHTML = (Consumed - Burned);
walked.innerHTML = Walked;
time.innerHTML = exerciseTime;
mt.innerHTML = (Walked/exerciseTime);
CPM.innerHTML = (Burned / exerciseTime);
last.innerHTML = `${DaDate} at ${DaTime}`;