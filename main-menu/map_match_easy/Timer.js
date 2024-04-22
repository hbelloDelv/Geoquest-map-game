import {cheerMe} from './cheer_me.js';
import {totalMatch, totalUnMatch} from './match_unmatch_scores.js';
import {addConfetti} from './splashConfetti.js'
import {replaceDiv} from './replace_map_final.js';
import {disableDragMap, enableDisableDragMap} from './enable_disableTile.js'
import { alertBoxGameOver } from './alertBox_gameOver.js';
import { alertBoxGoodJob } from './alertBox_goodJob.js'
import { alertBoxPerfectRun } from './alertBox_perfectRun.js'

//////////////// TESTING /////////////////////////
import {statesRemaining} from './match_unmatch_scores.js';

console.log(statesRemaining)



let startButton = document.getElementById("startBtn")
let enableStartButton = false
let timeLeft; // 5 minutes in seconds
let countdownInterval;
let minutes
let seconds 
let display;
// let intervalRunning = false;






///////////// THE COUNTDOWN TIMER FUNCTION /////////////////////
function startCountdown() {
    display = document.getElementById("show-time-div");
    timeLeft = 300;
    enableStartButton = true
    // timeLeft = 180; 

    countdownInterval = setInterval(function() {
         minutes = Math.floor(timeLeft / 60);
         seconds = timeLeft % 60;
        // let minutes = Math.floor(timeLeft / 60);
        // let seconds = timeLeft % 60;

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

        
      }, 1000); 
}



startButton.addEventListener('click', function() {
  startCountdown();
  enableDisableDragMap()
})


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
            alertBoxPerfectRun()
        },4200)
        
      }else if(totalMatch === 37 && totalUnMatch > 0 && timeLeft > 0){
        clearInterval(countdownInterval)
        addConfetti()
        cheerMe.finishingDrum()   
        setTimeout(()=>{
          alertBoxGoodJob()
        },2000)

    }else if(totalMatch !== 37 && timeLeft === 1){
        setTimeout(()=>{
            alertBoxGameOver(statesRemaining)
        },1000)
      startButton.disabled = enableStartButton
    }
      return false
  }


  // Alert Timing 


  let flashTime 
  let timeLabel

function alertTiming() {
  if(timeLeft === 30){
    cheerMe.warning()
    display.style.backgroundColor = 'red'    
  }else if(timeLeft === 119){
    cheerMe.warning()
    flashTime = document.querySelector('.show-time-remaining')
    timeLabel = document.querySelector('.time-remaining-label')
    flashTime.innerHTML =  minutes + ':' + seconds
    timeLabel.innerHTML = "Mins remaining"
    display.style.backgroundColor = '#ff9a3c'    
     hideTImeRemaining()
  }
  else if(timeLeft === 10){
    cheerMe.alertEndofGame()
  }
  return false
}



function hideTImeRemaining() {
  setTimeout(()=>{
    flashTime.classList.add("hide-show-time")
    timeLabel.classList.add("hide-show-time")
  },6000)
}





///////////////// PERHAPS I SHOULD ALLOW RESET BUTTON TO CARRY OUT THIS FUNCTION ///////////////////////
function reActivateStartButton() {
enableStartButton = false
  if(timeLeft === 0){
    startButton.disabled = enableStartButton
  }
}



window.addEventListener('load', disableDragMap)



// Export  the startCountdown function
export { startCountdown};









