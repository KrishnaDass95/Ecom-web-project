// Write your script here
const submitButton = document.getElementById('submit');
const firstNameField = document.getElementById('fname');
const lastNameField = document.getElementById('lname');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');

let users = [];
if(localStorage.getItem("users") === null){
    localStorage.setItem("users", JSON.stringify(users));
}
else{
    users = JSON.parse(localStorage.getItem("users"));
}

function checkIfUserExists(email){
    return users.some((user) => {
        if(user.email == email){
            return true;
        }
    })
}


function handleSignUp(e){
    e.preventDefault();
    let fName = firstNameField.value;
    let lName = lastNameField.value;
    let email = emailField.value;
    let password = passwordField.value;
    let confirmPassword = confirmPasswordField.value;
    if(fName && lName && email && password && confirmPassword){
        if(password != confirmPassword){
            alert('Password and Confirm password do not match');
        }
        else if(checkIfUserExists(email)){
            alert('user already exists, sign up with a different email');
        }
        else{
            let newUserObj = {
                firstName : fName,
                lastName : lName,
                email : email,
                password : password
            };
            users.push(newUserObj);
            localStorage.setItem("users", JSON.stringify(users));
            window.location.href = "../login/"
            console.log('users obj ->', localStorage.getItem("users"));
        }
    }
    else{
        alert("Please enter all fields, some fields are missing");
    }
    
}



submitButton.addEventListener('click', handleSignUp);