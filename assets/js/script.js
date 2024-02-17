document.addEventListener("DOMContentLoaded", function () {
    hideScreens();
    let initial = document.getElementById("button-default"); // Start of test button
    let score;
    initial.addEventListener("click", function () {
        document.querySelector(".start-screen").style.display = "none";
        showRandomScreen();
        document.querySelector('.blackscreen').style.visibility = 'visible';
        document.querySelector('.greenscreen').style.visibility = 'visible';
        document.querySelector('.yellowscreen').style.visibility = 'visible';
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
                showScreen(); // new but maybe good enough?
            } else {
                score = reactionTime; // score for values to be put into
                console.log(score)
                showScreen(); //instead of multiple do just one for now
                current(); //sidebar score
                scorePage(); //to add to scorePage
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

    // New but actually works hallelujah
    function current() {
        let sidebarscore = document.getElementById("sidebarscore");
        sidebarscore.innerHTML = score + " Msec";
    }
    
    // add score to score.html
    function scorePage() {
        let list1 = document.getElementById("scorelist");
        let scoreList = document.createElement("li");
        let textList = document.createTextNode(score + " Msec");
        scoreList.appendChild(textList);

    }
});
/*/local storage 
localStorage.setItem('final', JSON.stringify(storeHighscore));
let storedscore = JSON.parse(localStorage.getItem('score'));
let storedscore = JSON.parse(localStorage.getItem('score'));
  let  storedScore = JSON.parse(localStorage.getItem('score'));

  //for loop 
  let score = [0];
  let finalScore = 0;
  for (let i = 0; i <= score.length; i++) {
    finalScore += score[i]
  }
  console.log(finalScore)
*/
/*//scorepage removed
        let scoreList = document.createElement("li");
        let textList = document.createTextNode(score + " msec");
        scoreList.appendChild(textList);
        document.getElementById("scorelist").appendChild(scoreList);
*/

/*
// Ends the Test
function endTest() {
break; // how do i break / end the game?
}


// made to input score in sidebar and into score.html
function LeaderBoard() {
let sidebarS = document.getElementById("sidebarscore");
sidebarS.innerHTML = `${finalScore} Sec`;
}

//add new text to score.html        
function storeHighscore() {
let table = document.table;
table.appendChild(newAttempt, newScore);
let newAttempt = document.createElement = ("td");
newAttempt.innerHTML = (i++);
let newScore = document.createElement("td");
newScore.innnerHTML = finalScore;
}

document.write("<h1>Hello World!</h1>"); // could us perhaps with attribute in html
 
}*/