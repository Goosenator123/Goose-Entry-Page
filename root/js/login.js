// Get references to the HTML elements
const signIn = document.getElementById("signInButton");
const redirect = document.getElementById("redirectButton");
const username = document.getElementById('username');
const password = document.getElementById('password');

// Get references to error messages for validation
const errorInvalid = document.getElementById("errorInvalid");

// Function that checks if account exists
const checkExist = (username) => {
    const storedData = localStorage.getItem(username) == null ? true : false;
    return storedData
}

// Function that checks if username and password are valid
const checkAccount = (username, password) => {
    const storedData = localStorage.getItem(username)
    const existingData = JSON.parse(storedData)

    if (existingData.username === username && existingData.password === password){
        return false
    } else {
        return true
    }
}

// Redirect function to sign up page
function redirecting() {
    window.location.href = "signUpPage.html";
}

// Log in with Enter function
function loginWithEnter(e) {
    if(e.key == "Enter"){
        login()
    }
}

// Log in Function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Set error messages as hidden upon loaded
    errorInvalid.style.visibility = "hidden";

    // Error message if account does not exist
    
    if(username.length === 0 || password.length === 0){
        errorInvalid.style.visibility = "visible";
        errorInvalid.textContent = "Please fill out the required fields";
    } else if(checkExist(username) || checkAccount(username, password)){
        errorInvalid.style.visibility = "visible";
        errorInvalid.textContent = "Invalid username or password";
    } else {
        errorInvalid.style.visibility = "visible";
        errorInvalid.style.color = "green"
        errorInvalid.textContent = `${username} is logged in`;
        setTimeout(() => {
            window.location.href = "firstPage.html";
        }, 2000)
    }
}

// randomBullshit.exe
signIn.addEventListener("click", login);
username.addEventListener("keydown", loginWithEnter);
password.addEventListener("keydown", loginWithEnter);
redirect.addEventListener("click", redirecting);
