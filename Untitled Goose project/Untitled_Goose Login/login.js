function login(){
    var username = document.getElementById('name').value
    var password = document.getElementById('password').value

    if (username && password){
        var storedPassword = localStorage.getItem(username)
        if (storedPassword === password){
            window.location.href = 'firstPage.html'
        } else {
            alert("Password or Username does not match!")
        }
    } else {
        alert("Please enter a name and a password!")
    }
}