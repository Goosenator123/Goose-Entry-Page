const signIn = document.getElementById("signInButton");
const redirect = document.getElementById("redirectButton");

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password) {
        var storedUsername = localStorage.getItem(username);
        var storedPassword = localStorage.getItem(password);

        if(storedUsername === username){
            if (storedPassword === password) {
                window.location.href = 'firstPage.html';
            } else {
                alert("Password or Username does not match!");
            }
        } else {
            alert("account doesnt exist!")
        }
    } else {
        alert("Please enter a name and a password!");
    }
}

function redirecting() {
    window.location.href = "index.html";
    
}

signIn.addEventListener("click", login);
redirect.addEventListener("click", redirecting);
