const changeTheme = document.getElementById("changeTheme");
const themeOptions = {
    'dark': false,
    'light': false,
};
let isCooldown = false;
const cooldownTimer = 1000;

function toggleTheme(theme){
    document.body.classList.toggle(theme);
    themeOptions[theme] = !themeOptions[theme]
}

function activateButton(){
    isCooldown = false;
}

function executeChange(){
    if(!isCooldown){
        toggleTheme(themeOptions.dark ? 'light':'dark')
        isCooldown = true;
        setTimeout(activateButton, cooldownTimer);
    }
}

changeTheme.addEventListener("click", executeChange)