let Username

document.getElementById('submit-btn').onclick = (event) => {
    event.preventDefault();

    Username = document.getElementById('username').value;
}

const database = firebase.database().ref(Username)

