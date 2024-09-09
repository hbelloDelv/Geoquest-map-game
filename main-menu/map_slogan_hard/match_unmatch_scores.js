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



export {match, unMatch, totalMatch, totalUnMatch, countStatesRemaing, statesRemaining};