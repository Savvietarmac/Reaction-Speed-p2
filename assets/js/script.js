document.addEventListener("DOMContentLoaded", function () {
    hideScreens();
    let initial = document.getElementById("button-default"); // Start of test button

    initial.addEventListener("click", function() {
        document.querySelector(".start-screen").style.display = "none";
        showRandomScreen();
    });

    // Function to hide all screens
    function hideScreens() {
        document.querySelector('.blackscreen').style.display = 'none';
        document.querySelector('.greenscreen').style.display = 'none';
        document.querySelector('.yellowscreen').style.display = 'none';
    }

// Function to show a random screen
function showRandomScreen() {
    hideScreens(); // Ensure all screens are hidden before showing a new one
    const screens = ['.blackscreen', '.greenscreen', '.yellowscreen'];
    const randomIndex = Math.floor(Math.random() * screens.length); // Pick a random screen
    const selectedScreen = document.querySelector(screens[randomIndex]);
    selectedScreen.style.display = 'block';

    let startTime = Date.now(); // Record the time when the screen is shown

    // Add click listener to the selected screen
    selectedScreen.addEventListener('click', function() {
        let endTime = Date.now(); // Record the time when the screen is clicked
        let reactionTime = endTime - startTime; // Calculate reaction time in milliseconds
        console.log(screens[randomIndex].slice(1) + ' screen clicked', 'Reaction time: ' + reactionTime + ' ms'); // Log color and reaction time
        showRandomScreen(); // Show a new random screen
    }, { once: true }); // Use { once: true } to ensure the listener is removed after execution

    /*
    // to make sure the game ends after 10 greenscreensclicks
    for (greenscreen = 0; greenscreen <= 10; i++) {
        endTest();
    }
    */
}
});