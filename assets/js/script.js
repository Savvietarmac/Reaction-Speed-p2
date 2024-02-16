document.addEventListener("DOMContentLoaded", function () {
    hideScreens();
    let initial = document.getElementById("button-default"); // Start of test button

    initial.addEventListener("click", function () {
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
        const screens = ['.blackscreen', '.greenscreen', '.yellowscreen']; // should remove .blackscreen ask for advice *
        const randomIndex = Math.floor(Math.random() * screens.length); // Pick a random screen
        const selectedScreen = document.querySelector(screens[randomIndex]);
        selectedScreen.style.display = 'block';

        let startTime = Date.now(); // Record the time when the screen is shown

        // Add click listener to the selected screen
        selectedScreen.addEventListener('click', function () {
            let endTime = Date.now(); // Record the time when the screen is clicked
            let reactionTime = endTime - startTime; // Calculate reaction time in milliseconds
            console.log(screens[randomIndex].slice(1) + ' screen clicked', 'Reaction time: ' + reactionTime + ' ms'); // Log color and reaction time
            showRandomScreen(); // Show a new random screen
        }, { once: true }); // Use { once: true } to ensure the listener is removed after execution

        /*
        // to make sure the game ends after 10 greenscreensclicks
        for (greenscreen = 0; greenscreen <= 10; i++) {
            endTest();
            sidebar-score();
        }
    
        // Ends the Test
        function endTest() {
            break; // how do i break / end the game?
        }
    
        // made to not have the yellow and green
        if (randomIndex === .greenscreen) {
            
        } else {
    
        }
    
        // a calc function made to add endtime to the score array and then calculate the median
        function calc() {
            let score = [];
            let scoreAdd = reaction.pop(score);
            let finalScore = score / score.length; // might use .map() for targeting every element in score
            LeaderBoard();
        }
    
    
        // made to input score in sidebar and into score.html
        function LeaderBoard() {
            let sidebarS = document.getElementById("sidebarscore");,
            sidebarS.innerHTML = `${finalScore} Sec`;
        }
        
        //add new text to score.html        
        function storeHighscore() { 
            let table = document.table;
            table.appendChild(newAttempt, newScore);
            let newAttempt = document.createElement=("td");
            newAttempt.innerHTML = (i++);
            let newScore = document.createElement("td");
            newScoreRow.innnerHTML = finalScore;
        }
    
        document.write("<h1>Hello World!</h1>"); // could us perhaps with attribute in html
        //Inbetween every black screen  Math.floor(Math.random() * 4) for randomScreen to show
        */
    }
});