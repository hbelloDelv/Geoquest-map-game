const mapDiv = document.getElementById('map')
const allStates = mapDiv.children[0]
const state1 = allStates.children[1]
const state2 = allStates.children[2]
// console.log(state2)



function stateDetailsModal(){
    setTimeout( ()=>{
        alert('This is Abia state')
    },1300)
}


const stateModal = document.getElementById('state-modal');
const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', ()=>{
    stateModal.style.display = 'none'
})

// console.log(closeButton)




function stateDetailsModal(){
    const stateInfo = document.getElementById('state-info')
    const mystate1 = 'Abia State'
    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate1, stateInfo)
}


function doubleClick(){
    alert('you double click me')
}


state1.addEventListener('mousedown', stateDetailsModal);
state1.removeEventListener('mouseup', stateDetailsModal);
state1.addEventListener('dblclick', doubleClick);


// function myStateInfo(stateName, stateMap, stateInfo){
//     const stateText = document.createElement('div')
//     const showState = document.createElement('p');
//     showState.innerHTML = stateName;
//     stateText.appendChild(showState);
//     console.log(showState)
// }


function myStateName(stateName, contentDiv){
    contentDiv.style.textAlign = "center";
    contentDiv.innerHTML = stateName
    console.log(contentDiv)
}

// myStateInfo('Nigeria')