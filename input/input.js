const Consumed = document.getElementById('Consumed');
const Burned = document.getElementById('Burned');
const Walked = document.getElementById('Walked');
const exerciseTime = document.getElementById('exerciseTime');

document.getElementById('update-btn').onclick = UpdateButton;

function UpdateButton(event) {
    
    event.preventDefault();

    if (Consumed.valueAsNumber == undefined) {
        Consumed.valueAsNumber = 0;
    }
    if (Burned.valueAsNumber == undefined) {
        Burned.valueAsNumber = 0;
    }
    if (Walked.valueAsNumber == undefined) {
        Walked.valueAsNumber = 0;
    }
    if (exerciseTime.valueAsNumber == undefined) {
        exerciseTime.valueAsNumber = 0;
    }

    let Data = {
        Consumed: Consumed.valueAsNumber,
        Burned: Burned.valueAsNumber,
        Walked: Walked.valueAsNumber,
        exerciseTime: exerciseTime.valueAsNumber,
    };

    // get OR create the user "tree" in the db
    let userObj = database.ref(`users/${username}`);

    // .get() returns a promise to get the value within that user tree
    userObj.get().then((dataSnapshot) => {

        // will make this data within the user tree an obj
        let databaseData = dataSnapshot.val();

        console.log(databaseData);

        if (databaseData !== null) {
            Data.Consumed += databaseData.Consumed;
            Data.Burned += databaseData.Burned;
            Data.Walked += databaseData.Walked;
            Data.exerciseTime += databaseData.exerciseTime;
        }

        localStorage.setItem("Consumed", Data.Consumed);
        localStorage.setItem("Burned", Data.Burned);
        localStorage.setItem("Walked", Data.Walked);
        localStorage.setItem("exerciseTime", Data.exerciseTime);

        console.log(Data);

        // we update the entire user tree to match Data
        userObj.set(Data);

    });

    console.log(userObj);

    let page = document.querySelector('#page-btn');

    page.style.display = 'block';
}