
let numH = 0
countHome = document.getElementById("counthome")
countHome.textContent = 0

function addOneH() {
    numH += 1
    countHome.textContent = numH
}

function addTwoH() {
    numH += 2
    countHome.textContent = numH
}

function addThreeH() {
    numH += 3
    countHome.textContent = numH
}

let numG = 0
countGuest = document.getElementById("countguest")
countGuest.textContent = 0

function addOne() {
    numG += 1
    countGuest.textContent = numG
}

function addTwo() {
    numG += 2
    countGuest.textContent = numG
}

function addThree() {
    numG += 3
    countGuest.textContent = numG
}


window.addOne = addOne
window.addOneH = addOneH
window.addTwo = addTwo
window.addTwoH = addTwoH
window.addThree = addThree
window.addThreeH = addThreeH

