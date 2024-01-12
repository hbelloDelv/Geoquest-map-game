const mapDiv = document.getElementById('map')
const allStates = mapDiv.children[0]

//Variable for each state
const state0 = allStates.children[0]
const state1 = allStates.children[1]
const state2 = allStates.children[2]
const state3 = allStates.children[3]
const state4 = allStates.children[4]
const state5 = allStates.children[5]
const state6 = allStates.children[6]
const state7 = allStates.children[7]
const state8 = allStates.children[8]
const state9 = allStates.children[9]
const state10 = allStates.children[10]
const state11 = allStates.children[11]
const state12 = allStates.children[12]
const state13 = allStates.children[13]
const state14 = allStates.children[14]
const state15 = allStates.children[15]
const state16 = allStates.children[16]
const state17 = allStates.children[17]
const state18 = allStates.children[18]
const state19 = allStates.children[19]
const state20 = allStates.children[20]
const state21 = allStates.children[21]
const state22 = allStates.children[22]
const state23 = allStates.children[23]
const state24 = allStates.children[24]
const state25 = allStates.children[25]
const state26 = allStates.children[26]
const state27 = allStates.children[27]
const state28 = allStates.children[28]
const state29 = allStates.children[29]
const state30 = allStates.children[30]
const state31 = allStates.children[31]
const state32 = allStates.children[32]
const state33 = allStates.children[33]
const state34 = allStates.children[34]
const state35 = allStates.children[35]
const state36 = allStates.children[36]
// console.log(state36)


// The modal 
const stateModal = document.getElementById('state-modal');
const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', ()=>{
    stateModal.style.display = 'none'

    // This below code is used to remove the Iframe from
    // DOM memory after the initial display to avoid duplicate 
    const stateInfo = document.getElementById('state-info')
    const IframeNode = stateInfo.childNodes[3]
    stateInfo.removeChild(IframeNode)
})



function myStateName(stateName, stateDiv,){
    stateDiv.style.textAlign = "center";
    stateDiv.innerHTML = stateName
    // stateInfo
}



// Modals for each state
function state0Modal(){
    const stateNameDiv = document.getElementById('state-name-div')
    const mystate0 = 'Borno State'
    const stateInfo = document.getElementById('state-info')
    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate0, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Borno_State")
}


function state1Modal(){
    const mystate1 = 'Abia State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate1, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Abia_State")
}


function state2Modal(){
    const mystate2 = 'Akwa Ibom State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate2, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Akwa_Ibom_State")
}


function state3Modal(){
    const mystate3 = 'Imo State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate3, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Imo_State")
}



function state4Modal(){
    const mystate4 = 'Rivers State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate4, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Rivers_State")
}


function state5Modal(){
    const mystate5 = 'Bayelsa State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate5, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Bayelsa_State")
}


function state6Modal(){
    const mystate6 = 'Benue State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate6, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Benue_State")
}


function state7Modal(){
    const mystate7 = 'Cross River State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate7, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Cross_River_State")
}


function state8Modal(){
    const mystate8 = 'Taraba State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate8, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Taraba_State")
}



function state9Modal(){
    const mystate9 = 'Kwara State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate9, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Kwara_State")
}


function state10Modal(){
    const mystate10 = 'Lagos State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate10, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Lagos_State")
}


function state11Modal(){
    const mystate11 = 'Niger State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate11, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Niger_State")
}


function state12Modal(){
    const mystate12 = 'Ogun State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)  
    myStateName(mystate12, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Ogun_State")
}


function state13Modal(){
    const mystate13 = 'Ondo State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate13, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Ondo_State")
}


function state14Modal(){
    const mystate14 = 'Ekiti State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate14, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Ekiti_State")
}


function state15Modal(){
    const mystate15 = 'Osun State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate15, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Osun_State")
}


function state16Modal(){
    const mystate16 = 'Oyo State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate16, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Oyo_State")
}


function state17Modal(){
    const mystate17 = 'Anambra State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate17, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Anambra_State")
}


function state18Modal(){
    const mystate18 = 'Bauchi State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate18, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Bauchi_State")
}


function state19Modal(){
    const mystate19 = 'Gombe State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate19, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Gombe_State")
}


function state20Modal(){
    const mystate20 = 'Delta State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate20, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Delta_State")
}


function state21Modal(){
    const mystate21 = 'Edo State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate21, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Edo_State")
}


function state22Modal(){
    const mystate22 = 'Enugu State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate22, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Enugu_State")
}


function state23Modal(){
    const mystate23 = 'Ebonyi State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate23, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Ebonyi_State")
}


function state24Modal(){
    const mystate24 = 'Kaduna State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate24, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Kaduna")
}


function state25Modal(){
    const mystate25 = 'Kogi State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate25, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Kogi_State")
}


function state26Modal(){
    const mystate26 = 'Plateau State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate26, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Plateau_State")
}


function state27Modal(){
    const mystate27 = 'Nassarawa State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate27, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Nassarawa_State")
}


function state28Modal(){
    const mystate28 = 'Jigawa State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate28, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Jigawa_State")
}


function state29Modal(){
    const mystate29 = 'Kano State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate29, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Kano_State")
}


function state30Modal(){
    const mystate30 = 'Katsina State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate30, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Katsina_State")
}


function state31Modal(){
    const mystate31 = 'Sokoto State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate31, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Sokoto_State")
}


function state32Modal(){
    const mystate32 = 'Zamfara State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate32, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Zamfara_State")
}


function state33Modal(){
    const mystate33 = 'Yobe State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate33, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Yobe_State")
}


function state34Modal(){
    const mystate34 = 'Kebbi State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate34, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Kebbi_State")
}

function state35Modal(){
    const mystate35 = 'Adamawa State'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')

    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate35, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Adamawa_State")
}



function state36Modal(){
    const mystate36 = 'F.C.T Abuja'
    const stateNameDiv = document.getElementById('state-name-div')
    const stateInfo = document.getElementById('state-info')
    
    setTimeout( ()=>{
        stateModal.style.display = 'block'
    },1300)
    myStateName(mystate36, stateNameDiv)
    IframeDisplay(stateInfo, "https://en.wikipedia.org/wiki/Abuja")
}



state0.addEventListener('mousedown', state0Modal);
state0.removeEventListener('mouseup', state0Modal);

state1.addEventListener('mousedown', state1Modal);
state1.removeEventListener('mouseup', state1Modal);

state2.addEventListener('mousedown', state2Modal);
// state1.addEventListener('dblclick', doubleClick);

state3.addEventListener('mousedown', state3Modal);

state4.addEventListener('mousedown', state4Modal);

state5.addEventListener('mousedown', state5Modal);

state6.addEventListener('mousedown', state6Modal);

state7.addEventListener('mousedown', state7Modal);

state8.addEventListener('mousedown', state8Modal);

state9.addEventListener('mousedown', state9Modal);

state10.addEventListener('mousedown', state10Modal);

state11.addEventListener('mousedown', state11Modal);

state12.addEventListener('mousedown', state12Modal);

state13.addEventListener('mousedown', state13Modal);

state14.addEventListener('mousedown', state14Modal);

state15.addEventListener('mousedown', state15Modal);

state16.addEventListener('mousedown', state16Modal);

state17.addEventListener('mousedown', state17Modal);

state18.addEventListener('mousedown', state18Modal);

state19.addEventListener('mousedown', state19Modal);

state20.addEventListener('mousedown', state20Modal);

state21.addEventListener('mousedown', state21Modal);

state22.addEventListener('mousedown', state22Modal);

state23.addEventListener('mousedown', state23Modal);

state24.addEventListener('mousedown', state24Modal);

state25.addEventListener('mousedown', state25Modal);

state26.addEventListener('mousedown', state26Modal);

state27.addEventListener('mousedown', state27Modal);

state28.addEventListener('mousedown', state28Modal);

state29.addEventListener('mousedown', state29Modal);

state30.addEventListener('mousedown', state30Modal);

state31.addEventListener('mousedown', state31Modal);

state32.addEventListener('mousedown', state32Modal);

state33.addEventListener('mousedown', state33Modal);

state34.addEventListener('mousedown', state34Modal);

state35.addEventListener('mousedown', state35Modal);

state36.addEventListener('mousedown', state36Modal);





function IframeDisplay(parentDiv, stateLink){
    var iframe = document.createElement('iframe');
    iframe.src = stateLink;
    iframe.width = '600'
    iframe.height = '400'
    iframe.frameborder = '0';
    parentDiv.appendChild(iframe)

}


