// import {replaceDiv} from './replace_map_final.js';
// import {cheerMe} from './cheer_me.js';
// import {addConfetti} from './splashConfetti.js'
// import {timeLeft} from './Timer.js'
import {displayAlertBox} from './alertBox.js'




let totalMatch = 0;
let totalUnMatch = 0;

let statesRemaining = 37

function match(){
    totalMatch++   
}


function unMatch(){
    totalUnMatch++
}



function countStatesRemaing() {
     statesRemaining--
}

// console.log(statesRemaining)



export {match, unMatch, totalMatch, totalUnMatch, countStatesRemaing, statesRemaining};