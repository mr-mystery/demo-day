const Consumed = document.getElementById('Consumed')
const Burned = document.getElementById('Burned')
const Walked = document.getElementById('Walked')
const exerciseTime = document.getElementById('exerciseTime')

document.getElementById('update-btn').onclick = UpdateButton

function UpdateButton (event) {
    event.preventDefault()

    let Data = {
        Consumed: Consumed.value,
        Burned: Burned.value,
        Walked: Walked.value,
        exerciseTime: exerciseTime.value,
    }

    console.log(Data);
    database.push(Data);
}