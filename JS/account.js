let database;
let page = document.getElementById('page-btn');

document.getElementById('submit-btn').onclick = UserButton

function UserButton (event) {
    event.preventDefault();

    Username = document.querySelector('#username').value;
    database = firebase.database().ref(Username);

    page.style.display = 'block';
}

