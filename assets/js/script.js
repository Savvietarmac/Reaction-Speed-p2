const all = document.addEventListener("DOMContentLoaded", function () {
    hideScreens();
    let initial = document.getElementById("button-default"); // Start of test button
    let score;
    let help = document.getElementById("button"); // help button
    let back = document.getElementById("xicon"); //back icon X
    initial.addEventListener("click", function () {
        document.querySelector(".start-screen").style.display = "none";
        showRandomScreen();
        document.querySelector('.blackscreen').style.visibility = 'visible';
        document.querySelector('.greenscreen').style.visibility = 'visible';
        document.querySelector('.yellowscreen').style.visibility = 'visible';
    });

    help.addEventListener("click", function () {
        document.querySelector('.div1').style.display = 'block';
        document.querySelector('.div1').style.visibility = 'visible';
        document.querySelector('.div2').style.display = 'block';
        document.querySelector('.div2').style.visibility = 'visible';
    });

    //exit help with X icon
    back.addEventListener("click", function () {
        document.querySelector('.div1').style.display = 'none';
        document.querySelector('.div1').style.visibility = 'hidden';
        document.querySelector('.div2').style.display = 'none';
        document.querySelector('.div2').style.visibility = 'hidden';
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
        const screens = ['.greenscreen', '.yellowscreen']; // We'll handle the blackscreen separately
        const randomIndex = Math.floor(Math.random() * screens.length); // Pick a random screen
        let selectedScreen;

        if (screens[randomIndex] === '.yellowscreen') {
            selectedScreen = document.querySelector(screens[randomIndex]);
            selectedScreen.style.display = 'block';
            setTimeout(function () {
                selectedScreen.style.display = 'none';
                showBlackScreen(); // Show black screen after yellow
            }, 2000); // Display yellow for exactly 2 seconds
        } else {
            selectedScreen = document.querySelector(screens[randomIndex]);
            selectedScreen.style.display = 'block';
        }

        let startTime = Date.now(); // Record the time when the screen is shown

        // Add click listener to the selected screen
        selectedScreen.addEventListener('click', function () {
            let endTime = Date.now(); // Record the time when the screen is clicked
            let reactionTime = endTime - startTime; // Calculate reaction time in milliseconds

            if (selectedScreen.classList.contains('yellowscreen')) {
                showScreen(); // returns to normal
                document.getElementById("p").innerHTML = "Try again!";
            } else {
                score = reactionTime; // score for values to be put into
                showScreen(); //instead of multiple do just one for now
                current(); //sidebar score
                document.getElementById("p").innerHTML = "You got it!";
            }

            showBlackScreen(); // Proceed to show black screen
        }, { once: true }); // Use { once: true } to ensure the listener is removed after execution
    }

    //Used to return the startscreen
    function showScreen() {
        document.querySelector('.start-screen').style.display = "flex";
        document.querySelector('.blackscreen').style.display = 'none';
        document.querySelector('.greenscreen').style.display = 'none';
        document.querySelector('.yellowscreen').style.display = 'none';
        document.querySelector('.blackscreen').style.visibility = 'hidden';
        document.querySelector('.greenscreen').style.visibility = 'hidden';
        document.querySelector('.yellowscreen').style.visibility = 'hidden';
        document.querySelector('.start-screen').style.height = '580%';
    }

    // Function to handle the display and timing of the black screen
    function showBlackScreen() {
        hideScreens();
        const blackScreen = document.querySelector('.blackscreen');
        blackScreen.style.display = 'block';

        const randomTime = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000); // Random time between 2-5 seconds

        setTimeout(function () {
            blackScreen.style.display = 'none';
            showRandomScreen(); // Show a new random screen after the timeout
        }, randomTime);
    }

    // Sidebar Msec under button
    function current() {
        let sidebarscore = document.getElementById("sidebarscore");
        sidebarscore.innerHTML = score + " Msec";
    }
});