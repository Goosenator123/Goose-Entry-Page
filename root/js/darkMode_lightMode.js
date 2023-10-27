// Get references to various elements
const changeTheme = document.getElementById("changeTheme");
const lightButton = document.getElementById("lightButton");
const darkTheme = document.getElementById("darkButton");

// Store theme options and control variables
const themeOptions = {
    'dark': false,
    'light': false,
};
let isCooldown = false;
const cooldownTimer = 500;

// Function to update UI elements' opacity
function updateUI(opacity, oppositeOpacity) {
    lightButton.style.opacity = opacity;
    darkTheme.style.opacity = oppositeOpacity;
}

// Function to toggle between light and dark themes
function toggleTheme(theme) {
    document.body.classList.toggle('dark');

    if (theme === 'dark') {
        // If dark theme is selected, update UI to show dark elements
        updateUI(0, 1);
    }
    if (theme === 'light') {
        // If light theme is selected, update UI to show light elements
        updateUI(1, 0);
    }

    themeOptions['dark'] = !themeOptions['dark']; // Toggle the selected theme
    console.log(theme); // Log the selected theme to the console
}

// Function to activate button and reset cooldown
function activateButton() {
    isCooldown = false;
}

// Function to execute theme change and handle cooldown
function executeChange() {
    if (!isCooldown) {
        toggleTheme(themeOptions.dark ? 'light' : 'dark'); // Toggle the theme
        isCooldown = true; // Set the cooldown flag
        setTimeout(activateButton, cooldownTimer); // Reset the button activation after cooldown
    }
}

// Add a click event listener to the "changeTheme" element to trigger theme change
changeTheme.addEventListener("click", executeChange);
