// Write your script here
console.log('login page');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const submitElement = document.getElementById('submit');


function login(){
    console.log('logging in');
}


submitElement.addEventListener('click', login)