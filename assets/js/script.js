let time = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,] // All the individual test times
let score = 0 // The eventual score of time/10 for a median of reactionspeed
let initial = document.getElementById("button-default") // start of test
initial.addEventListener("click", test)


document.addEventListener("DOMContentLoaded", function () {
    initial.addEventListener("click", test)
})



function test() {
    let black = document.getElementsByClassName("blackscreen")
    let green = document.getElementsByClassName("greenscreen")
    let yellow = document.getElementsByClassName("yellowscreen")
    black.style.display = "visible";
    if (initial === true) {
        black.style.display = "visible";
    }
    black.style.display = "visible";
    green.style.display = "visible";
    yellow.style.display = "visible";
    black.style.display = "none";
    green.style.display = "none";
    yellow.style.display = "none";
}