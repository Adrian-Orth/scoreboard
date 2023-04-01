let count = 0
let count1 = 0
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")


function home1() {
    count += 1
    scoreHome.textContent = count
}

function home2() {
    count += 2
    scoreHome.textContent = count
}

function home3() {
    count += 3
    scoreHome.textContent = count
}



function guest1() {
    count1 += 1
    scoreGuest.textContent = count1
}

function guest2() {
    count1 += 2
    scoreGuest.textContent = count1
}

function guest3() {
    count1 += 3
    scoreGuest.textContent = count1
}

function newGame() {
    count -= count
    count1 -= count1
    scoreHome.textContent = count
    scoreGuest.textContent = count1
}