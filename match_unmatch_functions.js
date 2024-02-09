import {replaceDiv} from './replace_map_final.js';
import {cheerMe} from './cheer_me.js';
import {addConfetti} from './splashConfetti.js'


//take care of count match and unmatch feature
let totalMatch = 0;
let totalUnMatch = 0;

function match(){
    totalMatch++
    checkScore()
}


function unMatch(){
    totalUnMatch++
    checkScore()
    // return totalUnMatch
}


function checkScore() {
    switch (totalMatch) {
        case 1:
            //   alert("Your score is 1");
            break;
        case 2:
            break;
        case 37:
            replaceDiv()
            cheerMe.finishingDrum()
            addConfetti()
            break;
    
        default:
            console.log("Your score is 0");
    }
}



export {match, unMatch, totalMatch, totalUnMatch};