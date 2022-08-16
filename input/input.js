const Consumed = document.getElementById('Consumed')
const Burned = document.getElementById('Burned')
const Walked = document.getElementById('Walked')
const exerciseTime = document.getElementById('exerciseTime')

document.getElementById('update-btn').onclick = UpdateButton

function UpdateButton (event) {
    event.preventDefault()

    console.log(database.ref(username).get())

    if(Consumed.valueAsNumber == undefined) {
        Consumed.valueAsNumber = 0
    }
    if(Burned.valueAsNumber == undefined) {
        Burned.valueAsNumber = 0
    }
    if(Walked.valueAsNumber == undefined) {
        Walked.valueAsNumber = 0
    }    
    if(exerciseTime.valueAsNumber == undefined) {
        exerciseTime.valueAsNumber = 0
    }

    let Data = {
        Consumed: Consumed.valueAsNumber + database.ref(username).child('Consumed').get(),
        Burned: Burned.valueAsNumber + database.ref(username).Burned,
        Walked: Walked.valueAsNumber + database.ref(username).Walked,
        exerciseTime: exerciseTime.valueAsNumber + database.ref(username).exerciseTime,
    }

    database.ref(username).set(Data);
}