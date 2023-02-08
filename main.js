// document.getElementById('submit-btn').onclick = UserButton;

// function UserButton (event) {
//     event.preventDefault();

//     let username = document.querySelector('#username').value;

//     localStorage.setItem("username", username);

//     document.getElementById('page-btn').style.display = 'block';
// };

let provider = new firebase.auth.GoogleAuthProvider();
function AuthGoogle() {
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            let credential = result.credential;
            let token = credential.accessToken;
            let user = result.user;

            sessionStorage.setItem("username", user.displayName);
            sessionStorage.setItem("loggedIn", "true");
            window.location="input/";
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
            alert("Error: "+ errorMessage);
        });
};