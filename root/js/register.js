// Get references to the HTML elements
const signUp = document.getElementById("signUpButton");
const signInForm = document.getElementById("signInForm");
const redirectButton = document.getElementById("redirectButton");

// Get references to error messages for validation
const errorUserLength = document.getElementById("errorUserLength");
const errorUserTaken = document.getElementById("errorUserTaken");
const errorPswLength = document.getElementById("errorPswLength");
const errorPswUpper = document.getElementById("errorPswUpper");
const errorConfirmation = document.getElementById("errorConfirmation");

// Function to check if a password contains special characters
function containsSpecialCharacter(password) {
    const specialCharacterPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/;
    return specialCharacterPattern.test(password);
}

// Function to check if a password contains uppercase letters
function containsUpperCase(password) {
    const upperCases = /[A-Z]/;
    return upperCases.test(password);
}

// Function to redirect to another page
function redirecting() {
    window.location.href = "index.html";
}

// Prevent the Enter key to submit form early
function preventSubmission(e){
    if(e.key == "Enter"){
        register(e)
        e.preventDefault();
    }
}

// Function to check if a username is already taken
const checkUsername = (username) => {
    const storedUserData = localStorage.getItem(username);

    if (storedUserData) {
        const existingUsername = JSON.parse(storedUserData);
        return existingUsername.username === username;
    }

    return false;
}

// Function to handle user registration
function register(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validation checks for the registration form
    if (
        username.length < 6 || // Username should be at least 6 characters long
        password.length < 6 || // Password should be at least 6 characters long
        confirmPassword !== password || // Password and confirmation do not match
        checkUsername(username) === true || // Username is already taken
        !containsSpecialCharacter(password) || // Password does not contain special characters
        !containsUpperCase(password) // Password does not contain uppercase letters
    ) {
        errorUserLength.style.visibility = "hidden";
        errorPswLength.style.visibility = "hidden";
        errorPswUpper.style.visibility = "hidden";
        errorConfirmation.style.visibility = "hidden";

        // Error messages for invalid usernames 
        if (username.length === 0) {
            errorUserLength.style.visibility = "visible";
            errorUserLength.textContent = "Please enter a username";
        } else if (username.length < 6) {
            errorUserLength.style.visibility = "visible";
            errorUserLength.textContent = "Username must be at least 6 characters long";
        } else if (checkUsername(username)) {
            errorUserTaken.style.visibility = "visible";
            errorUserTaken.textContent = "The username is already taken";
            let data = localStorage.getItem(username);
            console.log('The existing account is ' + data);
        } else {

            // Error messages for invalid passwords
            if (password.length === 0) {
                errorPswLength.style.visibility = "visible";
                errorPswLength.textContent = "Please enter a password";
            } else if (password.length < 6) {
                errorPswLength.style.visibility = "visible";
                errorPswLength.textContent = "Password must be at least 6 characters long";
            } else if (!containsSpecialCharacter(password) || !containsUpperCase(password)) {
                errorPswLength.style.visibility = "visible";
                errorPswLength.textContent = "Password must contain a symbol and an uppercase letter";
            } else {
                if (confirmPassword !== password) {
                    errorConfirmation.style.visibility = "visible";
                    errorConfirmation.textContent = "Your passwords do not match";
                }
            }
        }
    } else {
        // If all checks pass, save the user data to localStorage and redirect to another page
        const userData = {
            username: username,
            password: password,
        };
        localStorage.setItem(username, JSON.stringify(userData));

        // Redirecting after submission
        redirecting();
    }
}

// Attach a click event listener to the signup button to trigger the registration process
signUp.addEventListener("click", register);
document.addEventListener("keydown", preventSubmission)
// Attach a click event listener to the redirect button to trigger the redirection
redirectButton.addEventListener("click", redirecting);
