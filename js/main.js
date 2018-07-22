'use strict'
var previousNum
var startTime
var difficulty = 16
var difficultyStr = '' + difficulty
var intervalIndex


function setDifficulty(diff) {
    difficultyStr = '' + diff
    difficulty = diff
    createBoard()
    console.log('difficulty now is: ' + difficulty)
}

function createBoard() {
    previousNum = 0
    clearInterval(intervalIndex)
    var tableLength = Math.sqrt(difficulty)
    var gnums = []
    var elBoard = document.querySelector('.board')
    for (var i = 1; i <= difficulty; i++) {
        gnums.push(i)
    }
    var newInnerHtml = ''
    for (var i = 0; i < tableLength; i++) {
        newInnerHtml += '<tr>'
        for (var j = 0; j < tableLength; j++) {
            var randIndex = getRandInt(gnums.length - 1, 0)
            var num = gnums.splice(randIndex, 1)[0]
            newInnerHtml += '<td onclick = "cellClicked(this)">' + num + '</td>'
        }
        newInnerHtml += '</tr>'
    }

    elBoard.innerHTML = newInnerHtml
}

function cellClicked(clickedNum) {
    var currNumStr = '' + (previousNum + 1)
    if (clickedNum.innerHTML === currNumStr) {
        clickedNum.style.background = '#8fff00'
        previousNum++
        if (clickedNum.innerHTML === '1') {
            startTime = Date.now()
            intervalIndex = setInterval(updateCounter, 1)
        }
        if (clickedNum.innerHTML === difficultyStr) {
            clearInterval(intervalIndex)
        }
    }
}

function updateCounter() {
    document.querySelector('.counter').innerHTML = 'your time is: ' + parseFloat((Date.now() - startTime) / 1000).toFixed(3)
}

function getRandInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min)
}