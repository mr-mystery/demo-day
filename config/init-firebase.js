const firebaseConfig = {
    apiKey: "AIzaSyBTkQK_-g52Cz04eCRgKFxir4eDN6eoE_Y",
    authDomain: "fir-day-986a6.firebaseapp.com",
    databaseURL: "https://fir-day-986a6-default-rtdb.firebaseio.com",
    projectId: "fir-day-986a6",
    storageBucket: "fir-day-986a6.appspot.com",
    messagingSenderId: "650913614923",
    appId: "1:650913614923:web:fb44d92ccebc9b3fee11ce"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();

function checkCredentials() {
    if (sessionStorage.getItem("loggedIn") !== "true") {
        window.location = "../index.html";
    };
};
