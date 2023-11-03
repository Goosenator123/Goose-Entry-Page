// Get references to the HTML elements
const signUp = document.getElementById("signUpButton"); // Sign Up button
const signInForm = document.getElementById("signInForm"); // Sign-in form
const redirectButton = document.getElementById("redirectButton"); // Redirect button
const confirmPassword = document.getElementById("confirm-password"); // Confirm Password input field
const usernameInput = document.getElementById('username'); // Username input field
const passwordInput = document.getElementById('password'); // Password input field
const success = document.getElementById("successfulSignIn") // Sucessful creation message

// Get references to error messages for validation
const errorUser = document.getElementById("errorUser"); // Error message for username
const errorPsw = document.getElementById("errorPsw"); // Error message for password
const errorConfirmation = document.getElementById("errorConfirmation"); // Error message for password confirmation

// Easter Eggs
const rickroll = ['rick astley', 'rick', 'rickroll', 'never gonna give you up', 'never gonna give u up'];

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

// Prevent the Enter key from submitting the form prematurely
function registerWithEnter(e){
    if(e.key == "Enter"){
        register(e); // Call the registration function
        e.preventDefault(); // Prevent the default form submission behavior
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

    // Get inputed information
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Hide existing error messages
    errorUser.style.visibility = "hidden";
    errorPsw.style.visibility = "hidden";
    errorConfirmation.style.visibility = "hidden";

    // Check easter egg name
    if (rickroll.includes(username.toLowerCase())) {
        for (const name of rickroll) {
            if (name.toLowerCase() === username.toLowerCase()) {
                // Display successful sign up message
                success.style.visibility = "visible";
                success.style.color = "green";
                success.style.fontWeight = "bold";
                success.textContent = `EASTER EGGG?????`;
                setTimeout(() => {
                    window.location.href = "https://youtu.be/xvFZjo5PgG0?si=jb_XYw-aF93jrbiT";
                }, 1500);
            }
        }
    } else {
        // Validation checks for the registration form
        if (
            username.length < 6 || // Check if username is at least 6 characters long
            password.length < 6 || // Check if password is at least 6 characters long
            confirmPassword !== password || // Check if password and confirmation do not match
            checkUsername(username) === true || // Check if username is already taken
            !containsSpecialCharacter(password) || // Check if password does not contain special characters
            !containsUpperCase(password) // Check if password does not contain uppercase letters
        ) {

            // Error messages for invalid usernames 
            if (username.length === 0) {
                errorUser.style.visibility = "visible";
                errorUser.textContent = "Please enter a username";
            } else if (username.length < 6) {
                errorUser.style.visibility = "visible";
                errorUser.textContent = "Username must be at least 6 characters long";
            } else if (checkUsername(username)) {
                errorUser.style.visibility = "visible";
                errorUser.textContent = "The username is already taken";
                let data = localStorage.getItem(username);
                console.log('The existing account is ' + data);
            } else {
                // Error messages for invalid passwords
                if (password.length === 0) {
                    errorPsw.style.visibility = "visible";
                    errorPsw.textContent = "Please enter a password";
                } else if (password.length < 6) {
                    errorPsw.style.visibility = "visible";
                    errorPsw.textContent = "Password must be at least 6 characters long";
                } else if (!containsSpecialCharacter(password) || !containsUpperCase(password)) {
                    errorPsw.style.visibility = "visible";
                    errorPsw.textContent = "Password must contain a symbol and an uppercase letter";
                } else {
                    if (confirmPassword !== password) {
                        errorConfirmation.style.visibility = "visible";
                        errorConfirmation.textContent = "Your passwords do not match";
                    }
                }
            }
        } else {
            // Display successful sign up message
            success.style.visibility = "visible";
            success.style.color = "green";
            success.textContent = `${username} account has been created`;

            // If all checks pass, save the user data to localStorage and redirect to another page
            const userData = {
                username: username,
                password: password,
            };

            // If statement that is purely for testing
            if (username === "testing") {
                console.log(`${username} has been deleted!`)
            } else {
                // Store the created username with its password
                localStorage.setItem(username, JSON.stringify(userData));
            }
            
            // Redirect after successful registration
            setTimeout(() => {
                window.location.href = "firstPage.html";
            }, 1500);     
        }  
    } 
}

// Event listeners
signUp.addEventListener("click", register); // Trigger the registration process when Sign Up button is clicked
usernameInput.addEventListener("keydown", registerWithEnter); // Trigger registrationWithEnter function when a key is pressed in the username field
passwordInput.addEventListener("keydown", registerWithEnter); // Trigger registrationWithEnter function when a key is pressed in the password field
confirmPassword.addEventListener("keydown", registerWithEnter); // Trigger registrationWithEnter function when a key is pressed in the confirm password field
redirectButton.addEventListener("click", () => {
    window.location.href = "index.html";
}); // Trigger redirection when Redirect button is clicked
