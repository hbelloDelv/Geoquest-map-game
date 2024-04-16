import {cheerMe} from './cheer_me.js';
import {totalMatch, totalUnMatch} from './match_unmatch_scores.js';
import {addConfetti} from './splashConfetti.js'
import {replaceDiv} from './replace_map_final.js';
// import displayAlertBox from './alertBox_2minRemaing.js'
import {disableDragMap, enableDisableDragMap} from './enable_disableTile.js'



let startButton = document.getElementById("startBtn")
let enableStartButton = false
let timeLeft; // 5 minutes in seconds
let countdownInterval;
// let intervalRunning = false;

/////////// FINAL SCORE AND RESULT ////////////////////////
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
      startButton.disabled = enableStartButton
    }
      return false
  }


  // Alert Timing 
function alertTiming() {
  if(timeLeft === 30){
    cheerMe.warning()
  }else if(timeLeft === 290){
    // clearInterval(countdownInterval) 120
    // displayAlertBox()
  }
  else if(timeLeft === 10){
    cheerMe.alertEndofGame()
  }
  return false
}



///////////// THE COUNTDOWN TIMER FUNCTION /////////////////////
function startCountdown() {
    let display = document.getElementById("show-time-div");
    timeLeft = 300;
    enableStartButton = true
    // timeLeft = 180; 

    countdownInterval = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // Add leading zero if necessary
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Display the time
        display.textContent = minutes + ':' + seconds;

        // Start Button disable while timer runs
        startButton.disabled = enableStartButton

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
      // intervalRunning = true
}



startButton.addEventListener('click', function() {
  startCountdown();
  enableDisableDragMap()
})




///////////////// PERHAPS I SHOULD ALLOW RESET BUTTON TO CARRY OUT THIS FUNCTION ///////////////////////
function reActivateStartButton() {
enableStartButton = false
  if(timeLeft === 0){
    startButton.disabled = enableStartButton
  }
}



// function stopInterval() {
//   clearInterval(countdownInterval);
//   intervalRunning = false;
// }



window.addEventListener('load', disableDragMap)



// Export countdown variable along with the startCountdown function
// export { startCountdown, intervalRunning, stopInterval};
export { startCountdown};









