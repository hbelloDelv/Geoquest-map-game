const    btnLevelOne = document.querySelector('#btn-level-one')
const    btnLevelTwo = document.querySelector('#btn-level-two')

const    btnLevelEasy = document.querySelector('#btn-level-easy')
const    btnLevelMedium = document.querySelector('#btn-level-medium')
const    btnLevelHard = document.querySelector('#btn-level-hard')



let enableBtnLevelEasy = true
let enableBtnLevelMedium = true
let enableBtnLevelHard = true   


// DISABLE THE BUTTONS WHEN THE PAGE LOAD
btnLevelEasy.disabled = enableBtnLevelEasy
btnLevelMedium.disabled = enableBtnLevelMedium
btnLevelHard.disabled = enableBtnLevelHard


let btnLevelOneTarget
btnLevelOne.addEventListener('click',(e)=>{
    btnLevelOneTarget =  e.target.id

    
    enableBtnLevelEasy = false
    enableBtnLevelMedium = false
    enableBtnLevelHard = false
    btnLevelEasy.disabled = enableBtnLevelEasy
    btnLevelMedium.disabled = enableBtnLevelMedium
    btnLevelHard.disabled = enableBtnLevelHard


    if(btnLevelOneTarget === "btn-level-one"){
        
        btnLevelEasy.addEventListener('click', ()=>{
            window.location.href = './map_match_easy/index.html'
        })
        
        btnLevelMedium.addEventListener('click', ()=>{
    
            window.location.href =  './map_match_medium/index.html'
        })
        
        btnLevelHard.addEventListener('click', ()=>{
            window.location.href =  './map_match_hard/index.html'
        })

    }
    
    btnLevelTwo.disabled = true  
    // EnableButtonOneIfDisable() 
    

})






/////////////// LEVEL TWO CODE //////////////////////////
let btnLevelTwoTarget
btnLevelTwo.addEventListener('click',(e)=>{
    btnLevelTwoTarget =  e.target.id
    // console.log(btnLevelTwoTarget)
    
    enableBtnLevelEasy = false
    enableBtnLevelMedium = false
    enableBtnLevelHard = false
    btnLevelEasy.disabled = enableBtnLevelEasy
    btnLevelMedium.disabled = enableBtnLevelMedium
    btnLevelHard.disabled = enableBtnLevelHard
    
    if(btnLevelTwoTarget === "btn-level-two"){

        btnLevelEasy.addEventListener('click', ()=>{
            // alert('level two easy')
            window.location.href = './map_slogan_easy/index.html'
        })
        
        btnLevelMedium.addEventListener('click', ()=>{
            alert('level two medium')
            window.location.href =  './map_slogan_medium/index.html'
        })
        
        btnLevelHard.addEventListener('click', ()=>{
            alert('level two hard')
            window.location.href =  './map_slogan_hard/index.html'
        })
    }
    
    btnLevelOne.disabled = true

})


function EnableButtonOneIfDisable() { 
    if(btnLevelTwo.disabled === true){
        btnLevelTwo.disabled = false
        btnLevelOne.disabled = true
         
    } 
}

// console.log(btnLevelOne, btnLevelTwo, btnLevelEasy, btnLevelMedium, btnLevelHard)