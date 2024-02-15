let time = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,] // All the individual test times
let score = 0 // The eventual score of time/10 for a median of reactionspeed
let initial = document.getElementById("button-default") // start of test
let black = document.getElementsByClassName("blackscreen") // black background
let green = document.getElementsByClassName("greenscreen") // green click screen
let yellow = document.getElementsByClassName("yellowscreen") // yellow do not click screen

document.addEventListener("DOMContentLoaded", function () {
    initial.addEventListener("click", function() {
        black.style.zindex = 2;
    })

})

black.addEventListener("click", e => {

})

green.addEventListener("click", e => {

})

yellow.addEventListener("click", e => {

})

initial.addEventListener("click", e => {

})

initial.addEventListener("click", e => {

})






function test() {

    black.style.zindex; "2";

    black.style.display = "none";
    green.style.display = "none";
    yellow.style.display = "none";
}