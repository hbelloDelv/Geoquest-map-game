import {cheerMe} from './cheer_me.js';
import {totalMatch, totalUnMatch} from './match_unmatch_scores.js';
import {addConfetti} from './splashConfetti.js'
import {replaceDiv} from './replace_map_final.js';



let timeLeft; // 5 minutes in seconds
let countdownInterval;

function startCountdown() {
    let display = document.getElementById("show-time-div");
    // timeLeft = 300; 
    timeLeft = 180; 

    countdownInterval = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // Add leading zero if necessary
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Display the time
        display.textContent = minutes + ':' + seconds;

        // Check if the countdown has finished
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            display.textContent = '00:00';
        } else {
            timeLeft--;
            // checkScore(); // Call this function every second
            checkScore()
            alertTiming()
        }
    }, 1000); // Update every second
}

document.getElementById("startBtn").addEventListener("click", startCountdown);


// WORKING CODE ////////////////////////

function checkScore() {
  if(totalMatch === 37 && totalUnMatch === 0 && timeLeft > 0){
        clearInterval(countdownInterval)
        addConfetti()
        cheerMe.finishingDrum()   
        setTimeout(()=>{
            replaceDiv()
        },2600)
        setTimeout(()=>{
            alert("Perfect run\n click Reset button to play again")
            // displayAlertBox()
            // location.reload()
        },4400)

    }else if(totalMatch === 37 && totalUnMatch > 0 && timeLeft > 0){
        clearInterval(countdownInterval)
        addConfetti()
        cheerMe.finishingDrum()   
        setTimeout(()=>{
            alert("Great job\n click Reset button to play again")
            // location.reload()
        },2000)
    }else if(totalMatch !== 37 && timeLeft === 1){
        setTimeout(()=>{
            alert("Game over\n Restart")
        },1000)
      
    }
      return false
  }

function alertTiming() {
  if(timeLeft === 30){
    cheerMe.warning()
  }else if(timeLeft === 120){
    alert("2 mins left")
  }
  else if(timeLeft === 10){
    cheerMe.alertEndofGame()
  }
  return false
}



// Export countdown variable along with the startCountdown function
export { startCountdown};
