// Get references to the HTML elements
const signIn = document.getElementById("signInButton"); // Sign In button
const redirect = document.getElementById("redirectButton"); // Redirect button
const usernameInput = document.getElementById('username'); // Username input field
const passwordInput = document.getElementById('password'); // Password input field

// Easter Eggs
const rickroll = ['rick astley', 'rick', 'rickroll', 'never gonna give you up', 'never gonna give u up'];

// Get references to error messages for validation
const errorInvalid = document.getElementById("errorInvalid"); // Error message for invalid login

// Function that checks if an account exists in local storage
const checkExist = (username) => {
    const storedData = localStorage.getItem(username) == null ? true : false;
    return storedData;
}

// Function that checks if the provided username and password are valid
const checkAccount = (username, password) => {
    const storedData = localStorage.getItem(username);
    const existingData = JSON.parse(storedData);

    if (existingData && existingData.username === username && existingData.password === password) {
        return false; // Valid username and password
    } else {
        return true; // Invalid username or password
    }
}

// Log in with Enter key function
function loginWithEnter(e) {
    if (e.key == "Enter") {
        login();
    }
}

// Log in Function
function login() {
    // Get inputed username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Set error messages as hidden upon page load
    errorInvalid.style.visibility = "hidden";

    // Check easter egg name
    if (rickroll.includes(username.toLowerCase())) {
        for (const name of rickroll) {
            if (name.toLowerCase() === username.toLowerCase()) {
                // Display successful EASTER EGG finding
                errorInvalid.style.visibility = "visible";
                errorInvalid.style.color = "green";
                errorInvalid.textContent = `EASTER EGG BABYYYYY!!!`;
                errorInvalid.style.fontWeight = "bold";
                setTimeout(() => {
                    window.location.href = "https://youtu.be/xvFZjo5PgG0?si=jb_XYw-aF93jrbiT";
                }, 1500);                
            }
         }
    } else {

        // Display error message if the account does not exist
        if (username.length === 0 || password.length === 0) {
            errorInvalid.style.visibility = "visible";
            errorInvalid.textContent = "Please fill out the required fields";
        } else if (checkExist(username) || checkAccount(username, password)) {
            errorInvalid.style.visibility = "visible";
            errorInvalid.textContent = "Invalid username or password";
        } else {
            // Display successful logged in message
            errorInvalid.style.visibility = "visible";
            errorInvalid.style.color = "green";
            errorInvalid.textContent = `Logging ${username} in`;

            // Redirect to the first page after a brief delay
            setTimeout(() => {
                window.location.href = "firstPage.html";
            }, 1500);
        }
    }
}

// Event listeners
signIn.addEventListener("click", login); // Trigger login function when Sign In button is clicked
usernameInput.addEventListener("keydown", loginWithEnter); // Trigger loginWithEnter function when Enter key is pressed in the username field
passwordInput.addEventListener("keydown", loginWithEnter); // Trigger loginWithEnter function when Enter key is pressed in the password field
redirect.addEventListener("click", () => {
    window.location.href = "signUpPage.html";
}); // Trigger redirecting function when Redirect button is clicked
