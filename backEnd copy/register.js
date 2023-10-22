function register(){
    var username = document.getElementById('name').value
    var password = document.getElementById('password').value
    var confirmPassword = document.getElementById('confirmation').value

    if(username && password){
        if(password !== confirmPassword){
            alert('Passwords do not match!')
        } else {
            localStorage.setItem(username, password)
            alert(`\"${username}\" account created successfully!`)

        }
    } else {
        alert('Please enter a name and a password!')
    }
}

function redirect(){
    window.location.href = "signInPage.html"
}