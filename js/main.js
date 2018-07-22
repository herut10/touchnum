'use strict'

var gQuests
var gCurrQuestIdx = 0



function checkAnswer(optIdx) {
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        gCurrQuestIdx++
        if (gCurrQuestIdx === gQuests.length) {
            var elBody = document.querySelector('body')
            elBody.innerHTML = '<div class="ending"><img class="proud" src="img/proud.jpg"><p>CONGRATULATIONS!!</p></div>'
        } else {
            renderQuest(gCurrQuestIdx)
        }
    }
}

function renderQuest(id) {
    var elBody = document.querySelector('body .questionBody')
    var strHtml = '<tbody>\n'
    strHtml += '<tr>\n'
    strHtml += `<th colspan="2"><img src="img/${id}.jpg"></th>\n`
    strHtml += '</tr>\n'
    var numOfButtonsPerRow = 2
    strHtml += '<tr>\n'
    var currRowNumOfButtons = 1
    for (var i = 0; i < gQuests[id].opts.length; i++ , currRowNumOfButtons++) {
        strHtml += '<td>\n'
        strHtml += `<button type="button" onclick="checkAnswer(${i + 1})">${gQuests[id].opts[i]}</button>\n`
        strHtml += '</td>\n'
        if (!(currRowNumOfButtons % numOfButtonsPerRow)) {
            strHtml += '</tr>\n'
            strHtml += '<tr>\n'
        }
    }
    strHtml += '</tr>\n'
    strHtml += '<tbody>\n'
    elBody.innerHTML = strHtml
}

function initGame() {
    createQuests()
    renderQuest(0)
}

function createQuests() {
    gQuests = [{ id: 0, opts: [], correctOptIndex: 1 },
    { id: 1, opts: [], correctOptIndex: 2 },
    { id: 2, opts: [], correctOptIndex: 1 }]
    gQuests[0].opts.push('1. Trump is making america great again.')
    gQuests[0].opts.push('2. Trump is wearing a red suit.')
    gQuests[1].opts.push('1. the cat thinks he\'s a tomato.')
    gQuests[1].opts.push('2. the cat thinks he\'s a slice of bread.')
    gQuests[2].opts.push('1. Yaron is weaing a cap.')
    gQuests[2].opts.push('2. Yaron is wearing a helmet.')
}
