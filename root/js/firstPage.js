// Define an array of video URLs
const videoUrls = [
    "https://www.youtube.com/embed/rfscVS0vtbw?si=gyegYgW9NaeJCr-x",
    "https://www.youtube.com/embed/HXV3zeQKqGY?si=bFexPG2gB6J4-7e-",
    "https://www.youtube.com/embed/PkZNo7MFNFg?si=fRAPXTzEpU89jGqG",
    "https://www.youtube.com/embed/pQN-pnXPaVg?si=SCfcmSA23K3CLbzf",
    "https://www.youtube.com/embed/1Rs2ND1ryYc?si=4Ou4YlAVrdxiHgMZ",
    "https://www.youtube.com/embed/vLnPwxZdW4Y?si=yJzJUJ9u24_OKILt",
    "https://www.youtube.com/embed/grEKMHGYyns?si=wJa8dbqwH8nzhhVV",
    "https://www.youtube.com/embed/ArHEDBlrh1Y"
];

// Define a dictionary of website and editor URLs
const websiteUrls = {
    'w3school': 'https://www.w3schools.com',
    'freecodecamp': 'https://www.freecodecamp.org',
    'codecademy': 'https://www.codecademy.com',
    'MDN': 'https://developer.mozilla.org/en-US/',
    'vscode': 'https://code.visualstudio.com/download',
    'sublimetext': 'https://www.sublimetext.com',
    'jetbrains': 'https://www.jetbrains.com/products/'
};

// Get all the divs that have the specified class
const editors = document.querySelectorAll('.editor-container');
const websites = document.querySelectorAll('.website-container');

// Get the video list element from the HTML
const videoList = document.getElementById("video-list");

// Create and append iframes to the video container
videoUrls.forEach((url) => {
    const iframe = document.createElement("iframe");
    iframe.width = "420";
    iframe.height = "225";
    iframe.src = url;
    iframe.title = "YouTube video player";
    iframe.frameBorder = 0;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    videoList.appendChild(iframe);
});

// Create a loop to cycle through websiteUrls
for(let div in websiteUrls){
    setListener(div);
}

// Function that listens to a click event of all the specified divs
function setListener(id){
    const event = document.getElementById(id);

    // Event listener that redirects you to another website
    event.addEventListener('click', () => {
        const url = websiteUrls[id];
        console.log(`Redirecting to ${url}...`);
        window.open(url);
    });
}
