let time = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,] // All the individual test times
let score = 0 // The eventual score of time/10 for a median of reactionspeed
let initial = document.getElementById("button-default") // start of test
let black = document.getElementsByClassName("blackscreen") // black background
let green = document.getElementsByClassName("greenscreen") // green click screen
let yellow = document.getElementsByClassName("yellowscreen") // yellow do not click screen

initial.addEventListener("click", e => {
    setInterval(black, 0, 48, 0)
    setInterval(green, 0, 4, 0)
})


document.addEventListener("DOMContentLoaded", function () {
    initial.addEventListener("click", test)
})



function test() {

    black.style.zindex; "2";
    black.style.display = "visible";
    green.style.display = "visible";
    yellow.style.display = "visible";
    black.style.display = "none";
    green.style.display = "none";
    yellow.style.display = "none";
}