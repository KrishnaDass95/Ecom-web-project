// Write your script here
console.log('login page');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const submitElement = document.getElementById('submit');

// Handle login and then keep a current user object
let currentUser = {};
if(localStorage.getItem("currentUser") === null){
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}
else{
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser.userLoggedIn){
        window.location.href = '../shop/';
    }
}

let users = JSON.parse(localStorage.getItem("users"));

function checkIfUserSignedUp(email, password){
    return users.some((user) => (user.email == email && user.password == password)
)}

function generateToken() {
    const tokenBytes = 16;
    const buffer = new Uint8Array(tokenBytes);
    crypto.getRandomValues(buffer);
    return Array.from(buffer, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  

function login(e){
    e.preventDefault();
    let emailValue = emailField.value;
    let passwordValue = passwordField.value;

    if(checkIfUserSignedUp(emailValue, passwordValue)){
        currentUser = {
            userLoggedIn : generateToken()
        }
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location.href = '../shop/'
    }
    else{
        alert("Please sign up first, user not found");
    }
}


submitElement.addEventListener('click', login)