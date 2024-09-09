// import {stopInterval, intervalRunning, startCountdown} from './Timer.js'




const myAlert = document.createElement('dialog')
const bodyElement = document.querySelector('body')

export default function displayAlertBox() {
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



const contentWrapper = document.createElement('div');
function alertContent() {
    contentWrapper.style.width = '100%';
    contentWrapper.style.height = '40%';
    contentWrapper.style.backgroundColor = '#033503'; 
    contentWrapper.style.display = 'grid'
    contentWrapper.style.gridTemplateColumns = '1fr 1fr'
    myAlert.appendChild(contentWrapper)
}


const leftDivcontent = document.createElement('div');
function leftContenDiv() {
    // leftDivcontent.style.border = '1px solid red';
    // leftDivcontent.style.backgroundColor = 'yellow';
    leftDivcontent.innerHTML = timeRemainingEmoji;
    leftDivcontent.style.fontSize = '3.5rem';
    leftDivcontent.style.display = 'flex';
    leftDivcontent.style.justifyContent = 'center';
    leftDivcontent.style.alignItems = 'center'

}

let timeRemainingEmoji = '&#128521;'

const rightDivcontent = document.createElement('div');
function rightContenDiv() {
    // rightDivcontent.style.border = '1px solid black';
    // rightDivcontent.style.backgroundColor = 'blue';
    rightDivcontent.innerText = '2 Minutes \n remaining';
    rightDivcontent.style.color = 'white';
    rightDivcontent.style.fontSize = '2rem';
    rightDivcontent.style.display = 'flex';
    rightDivcontent.style.justifyContent = 'center';
    rightDivcontent.style.alignItems = 'center'
    rightDivcontent.style.padding = '0px 4px'
   

}





contentWrapper.appendChild(leftDivcontent)
contentWrapper.appendChild(rightDivcontent)

leftContenDiv()
rightContenDiv()





const actionDiv = document.createElement('div');
function handleButtonDiv() {
    actionDiv.style.width = '50%';
    // actionDiv.style.width = '100%';
    actionDiv.style.height = '20%';
    actionDiv.style.display = 'flex',
    // actionDiv.style.alignItems = 'center',
    actionDiv.style.justifyContent = 'center',

    actionDiv.style.marginTop = '32px';
    // actionDiv.style.backgroundColor = 'lightblue'; 
    myAlert.appendChild(actionDiv)
}



const btn = document.createElement('button');
function Button() {
    // btn.style.width = '100%';
    btn.style.width = '50%';
    btn.style.height = '100%';
    btn.style.border = 'none'
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';
    btn.innerText = "Ok"
    btn.style.fontFamily = 'Time new Roman',
    btn.style.fontWeight = 'bold'
    actionDiv.appendChild(btn)
}



// btn.addEventListener('click', ()=>{    
//     bodyElement.removeChild(myAlert)
//     if (intervalRunning == false) {
//        startCountdown()
//     }
// })


btn.addEventListener('click', ()=>{    
    bodyElement.removeChild(myAlert)
})


alertContent()
handleButtonDiv()
Button()


