// import {stopInterval, intervalRunning, startCountdown} from './Timer.js'
// import {statesRemaining} from './match_unmatch_scores.js';
// import {countNumberSates} from './index.js';




//////// DISPLAY THE ALERT BOX /////////////////////////
const myAlert = document.createElement('dialog')
const bodyElement = document.querySelector('body')


let gameOverEmoji = '&#128542;'

 function alertBoxGameOver() {
    myAlert.style.position = 'absolute';
    myAlert.style.zIndex = '100';
    myAlert.style.top = '20%';
    myAlert.style.left = '35%';
    myAlert.style.right = '35%';
    myAlert.style.display = 'flex';
    myAlert.style.flexDirection = 'column';
    myAlert.style.alignItems = 'center'
    myAlert.style.width = '30%';
    myAlert.style.height = '30%';
    myAlert.style.backgroundColor = '#03b103'; 
    myAlert.style.borderRadius = '4px'
    myAlert.style.boxShadow = '2px 2px 2px 1px whitesmoke'
    bodyElement.append(myAlert)
    // stopInterval()
    myAlert.showModal()
}


///////////////// WRAPPS THE WHOLE CONTENT ////////////////
const contentWrapper = document.createElement('div');
function alertContent() {
    contentWrapper.style.width = '100%';
    contentWrapper.style.backgroundColor = '#033503'; 
    contentWrapper.style.display = 'grid'
    contentWrapper.style.gridTemplateColumns = '1fr 1fr'
    myAlert.appendChild(contentWrapper)
}



//////////////// LEFT SECTION //////////////////////////////
const leftDivcontent = document.createElement('div');
function leftContenDiv() {
    // leftDivcontent.style.border = '1px solid red';
    // leftDivcontent.style.backgroundColor = 'yellow'
    leftDivcontent.style.display = 'flex';
    leftDivcontent.style.flexDirection = 'column'

}



const leftDivTopText = document.createElement('div');
function handleLeftDivTopText() {
    leftDivTopText.innerText = 'GAME OVER'
    leftDivTopText.style.fontSize = '2rem'
    leftDivTopText.style.textAlign = 'center'
    leftDivTopText.style.color = 'white'
    // leftDivTopText.style.backgroundColor = 'black'
    leftDivTopText.style.width = '100%'
    leftDivcontent.appendChild(leftDivTopText)

}


const leftDivEmoji = document.createElement('div');
function handleLeftDivEmoji() {
    leftDivEmoji.innerHTML = gameOverEmoji
    leftDivEmoji.style.fontSize = '3rem'
    leftDivEmoji.style.textAlign = 'center'
    // leftDivEmoji.style.backgroundColor = 'black'

    leftDivcontent.appendChild(leftDivEmoji)
   
}

// console.log(leftDivEmoji)







////////////// RIGHT SECTION ///////////////////
const rightDivcontent = document.createElement('div');
function rightContenDiv() {
    // leftDivcontent.style.border = '1px solid red';
    // rightDivcontent.style.backgroundColor = 'yellow'
    rightDivcontent.style.display = 'flex';
    rightDivcontent.style.flexDirection = 'column'

}



const rightDivTopText = document.createElement('div');
function handleRightDivTopText() {
    rightDivTopText.innerText = 'STATES REMAINING'
    rightDivTopText.style.fontSize = '1.5rem'
    rightDivTopText.style.textAlign = 'center'
    rightDivTopText.style.color = 'white'
    rightDivTopText.style.width = '100%'
    rightDivcontent.appendChild(rightDivTopText)
}




// let countNumberSate = document.querySelector('.number-of-states')

const rightDivTimeDisplay = document.createElement('div');
// const rightDivTimeDisplay = document.querySelector('.number-of-states');

function handleRightDivTime(statesRemaining) {
    rightDivTimeDisplay.innerHTML = statesRemaining
    rightDivTimeDisplay.style.fontSize = '1.5rem'
    rightDivTimeDisplay.style.textAlign = 'center'
    rightDivTimeDisplay.style.color = 'white'


    rightDivcontent.appendChild(rightDivTimeDisplay)
   
}




contentWrapper.appendChild(leftDivcontent)
contentWrapper.appendChild(rightDivcontent)

leftContenDiv()
rightContenDiv()




//////////////// BUTTONS WRAPPER DIV /////////////////////
const actionDiv = document.createElement('div');
function handleButtonDiv() {
    // actionDiv.style.width = '50%';
    actionDiv.style.width = '100%';
    actionDiv.style.height = '30%';
    actionDiv.style.display = 'flex',
    actionDiv.style.padding = '8px 8px',
    // actionDiv.style.alignItems = 'center',
    actionDiv.style.justifyContent = 'center',

    actionDiv.style.marginTop = 'auto';
    // actionDiv.style.backgroundColor = 'lightblue'; 
    // actionDiv.style.alignSelf = 'flex-end'; 
    myAlert.appendChild(actionDiv)
}



/////////////// THE THREE BUTTONS CREATED /////////////////////
const btnRestart = document.createElement('button');
function handleBtnRestart() {
    // btn.style.width = '100%';
    btnRestart.style.width = '50%';
    // btnRestart.style.height = '100%';
    btnRestart.style.border = 'none'
    btnRestart.style.borderRadius = '4px';
    btnRestart.style.cursor = 'pointer';
    btnRestart.innerText = "Restart"
    btnRestart.style.fontFamily = 'Time new Roman',
    btnRestart.style.fontWeight = 'bold'
    btnRestart.style.marginRight = '16px'
    actionDiv.appendChild(btnRestart)
}


const btnNextLevel = document.createElement('button');
function handleBtnNextLevel() {
    // btn.style.width = '100%';
    btnNextLevel.style.width = '50%';
    btnNextLevel.style.height = '100%';
    btnNextLevel.style.border = 'none'
    btnNextLevel.style.borderRadius = '4px';
    btnNextLevel.style.cursor = 'pointer';
    btnNextLevel.innerText = "Next Level"
    btnNextLevel.style.fontFamily = 'Time new Roman',
    btnNextLevel.style.fontWeight = 'bold'
    btnNextLevel.style.marginRight = '16px'
    actionDiv.appendChild(btnNextLevel)
}



const btnCancel = document.createElement('button');
function handleBtnCancel() {
    // btn.style.width = '100%';
    btnCancel.style.width = '50%';
    btnCancel.style.height = '100%';
    btnCancel.style.border = 'none'
    btnCancel.style.borderRadius = '4px';
    btnCancel.style.cursor = 'pointer';
    btnCancel.innerText = "Cancel"
    btnCancel.style.fontFamily = 'Time new Roman',
    btnCancel.style.fontWeight = 'bold'
    actionDiv.appendChild(btnCancel)
}


//////////////// THE THREE BUTTONS EVENTS /////////////////////
btnRestart.addEventListener('click', ()=>{    
    location.reload()
})


// btnNextLevel.addEventListener('click', ()=>{    
//     window.location.href =  './map_match_medium/index.html'
// })


btnCancel.addEventListener('click', ()=>{    
    bodyElement.removeChild(myAlert)
})


alertContent()
handleButtonDiv()
handleBtnRestart()
// handleBtnNextLevel()
handleBtnCancel()
handleLeftDivTopText()
handleLeftDivEmoji()
handleRightDivTopText()
handleRightDivTime()


// alertBoxGameOver()
export {alertBoxGameOver}
