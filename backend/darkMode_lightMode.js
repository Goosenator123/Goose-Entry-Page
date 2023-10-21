const changeTheme = document.getElementById("changeTheme");
const themeOptions = {
    'dark': false,
    'light': false,
};

function toggleTheme(theme){
    document.body.classList.toggle(theme);
    themeOptions[theme] = !themeOptions[theme]
};

function executeChange(){
    toggleTheme(themeOptions.dark ? 'light':'dark')
}