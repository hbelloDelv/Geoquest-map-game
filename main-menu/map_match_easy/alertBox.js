const myAlert = document.createElement('div')
const bodyElement = document.querySelector('body')

export function displayAlertBox() {
    myAlert.style.position = 'absolute';
    myAlert.style.zIndex = '100';
    myAlert.style.top = '20%';
    myAlert.style.left = '35%';
    myAlert.style.right = '35%';
    myAlert.style.display = 'flex';
    myAlert.style.flexDirection = 'column';
    myAlert.style.width = '30%';
    myAlert.style.height = '30%';
    myAlert.style.backgroundColor = '#03b103'; 
    myAlert.style.borderRadius = '4px'
    myAlert.style.boxShadow = '2px 2px 2px 1px whitesmoke'
    bodyElement.append(myAlert)
}



function alertContent() {
    const content = document.createElement('div');
    content.style.width = '100%';
    content.style.height = '40%';
    content.style.backgroundColor = '#033503'; 
    myAlert.appendChild(content)
}


const actionDiv = document.createElement('div');
function handleButtonDiv() {
    actionDiv.style.width = '50%';
    actionDiv.style.height = '20%';
    actionDiv.style.alignSelf = 'center'
    actionDiv.style.marginTop = '32px';
    // actionDiv.style.backgroundColor = 'lightblue'; 
    myAlert.appendChild(actionDiv)
}


const btn = document.createElement('button');
function Button() {
    btn.style.width = '100%';
    btn.style.height = '100%';
    btn.style.border = 'none'
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';
    btn.innerText = "Restart"
    btn.innerText = "Restart"
    actionDiv.appendChild(btn)
}


let modalPromisResolve;


btn.addEventListener('click', ()=>{    
    bodyElement.removeChild(myAlert)

    return new Promise(function(resolve) {
        modalPromisResolve = resolve
    })
})


alertContent()
handleButtonDiv()
Button()
// displayAlertBox()

