let page = document.getElementById('page-btn');

document.getElementById('submit-btn').onclick = UserButton

function UserButton (event) {
    event.preventDefault();

    let username = document.querySelector('#username').value;

    localStorage.setItem("username", username);

    page.style.display = 'block';
}
