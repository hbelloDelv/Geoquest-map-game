import{
    allStatesTiles, eachStateMap,


    abiaStateId, abujaStateId, adamawaStateId, akwa_ibomStateId, anambraStateId,
    bauchiStateId, bayelsaStateId, benueStateId, bornoStateId, cross_riverStateId,
    deltaStateId, ebonyiStateId, edoStateId, ekitiStateId, enuguStateId, gombeStateId,
    imoStateId, jigawaStateId, kadunaStateId, kanoStateId, katsinaStateId, kebbiStateId,
    kogiStateId, kwaraStateId, nassarawaStateId, nigerStateId, ondoStateId, osunStateId,
    oyoStateId, plateauStateId, riversStateId, sokotoStateId, tarabaStateId, yobeStateId,
    zamfaraStateId, ogunStateId, lagosStateId

}  from './each_SVG_State_ID.js'

import {match, unMatch, totalMatch, totalUnMatch} from './match_unmatch_functions.js';
import {cheerMe} from './cheer_me.js'
import {dragDivs, removeSingleNode} from './remove_map_when_match.js'
import {shuffleMaps} from './shuffle_maps_functions.js'



// prevent default state of not allowing element to be over it
allStatesTiles.forEach(state => {
    state.addEventListener('dragover', dragOver);
})


// Retrive the id from the drag map
eachStateMap.forEach(state => {    
    state.addEventListener('dragstart', (e)=>{      
        e.dataTransfer.setData("text/plain", state.id)
 })
})

// This is added to each SVG element
function dragOver(event) {
    event.preventDefault() 
    
}

// EACH STATE COMPARE IT'S ID TO THE DRAG MAP
abiaStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const abiaStateName = abiaStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === abiaStateName){
                    abiaStateId.classList.add('abia_color')
                    match()
                    cheerMe.stateOneCheers()
                    const matchDiv = document.getElementById('match')
                      // update match score
                    matchDiv.innerText = totalMatch;
                    // disableAbiaState()
                    removeSingleNode(dragDivs, 0);
                }
                else{
                    unMatch()
                    cheerMe.stateOneUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
        
})



abujaStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const abujaStateName = abujaStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === abujaStateName){
                    abujaStateId.classList.add('abuja_color')
                    match()
                    cheerMe.stateTwoCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableAujaState()
                    removeSingleNode(dragDivs, 1);
                }
                else{
                    unMatch()
                    cheerMe.stateTwoUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


adamawaStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const adamawaStateName = adamawaStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === adamawaStateName){
                    adamawaStateId.classList.add('adamawa_color')
                    match()
                    cheerMe.stateThreeCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableAdamawaState()
                    removeSingleNode(dragDivs, 2);
                }
                else{
                    unMatch()
                    cheerMe.stateThreeUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})




akwa_ibomStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const akwa_ibomStateName = akwa_ibomStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === akwa_ibomStateName){
                    akwa_ibomStateId.classList.add('akwa_ibom_color')
                    match()
                    cheerMe.stateFourCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableAkwa_IbomState()
                    removeSingleNode(dragDivs, 3);
                }
                else{
                    unMatch()
                    cheerMe.stateFourUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


anambraStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const anambraStateName = anambraStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === anambraStateName){
                    anambraStateId.classList.add('anambra_color')
                    match()
                    cheerMe.stateFiveCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableAnambraState()
                    removeSingleNode(dragDivs, 4);
                }
                else{
                    unMatch()
                    cheerMe.stateFiveUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


bauchiStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const bauchiStateName = bauchiStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === bauchiStateName){
                    bauchiStateId.classList.add('bauchi_color')
                    match()
                    cheerMe.stateSixCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableBauchiState();
                    removeSingleNode(dragDivs, 5);
                }
                else{
                    unMatch()
                    cheerMe.stateSixUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


bayelsaStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const bayelsaStateName = bayelsaStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === bayelsaStateName){
                    bayelsaStateId.classList.add('bayelsa_color')
                    match()
                    cheerMe.stateSevenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableBayelsaState()
                    removeSingleNode(dragDivs, 6);
                }
                else{
                    unMatch()
                    cheerMe.stateSevenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})



benueStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const benueStateName = benueStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === benueStateName){
                    benueStateId.classList.add('benue_color')
                    match()
                    cheerMe.stateEightCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableBenueState()
                    removeSingleNode(dragDivs, 7);
                }
                else{
                    unMatch()
                    cheerMe.stateEightUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})




bornoStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const bornoStateName = bornoStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === bornoStateName){
                    bornoStateId.classList.add('borno_color')
                    match()
                    cheerMe.stateNineCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableBornoState()
                    removeSingleNode(dragDivs, 8);
                }
                else{
                    unMatch()
                    cheerMe.stateNineUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


cross_riverStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const cross_riverStateName = cross_riverStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === cross_riverStateName){
                    cross_riverStateId.classList.add('cross_river_color')
                    match()
                    cheerMe.stateTenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableCross_RiverState()
                    removeSingleNode(dragDivs, 9);
                }
                else{
                    unMatch()
                    cheerMe.stateTenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


deltaStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const deltaStateName = deltaStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === deltaStateName){
                    deltaStateId.classList.add('delta_color')
                    match()
                    cheerMe.stateElevenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableDeltaState()
                    removeSingleNode(dragDivs, 10);
                }
                else{
                    unMatch()
                    cheerMe.stateElevenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


ebonyiStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const ebonyiStateName = ebonyiStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === ebonyiStateName){
                    ebonyiStateId.classList.add('ebonyi_color')
                    match()
                    cheerMe.stateTwelveCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableEbonyiState();
                    removeSingleNode(dragDivs, 11);
                }
                else{
                    unMatch()
                    cheerMe.stateTwelveUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


edoStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const edoStateName = edoStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === edoStateName){
                    edoStateId.classList.add('edo_color')
                    match()
                    cheerMe.stateThirteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableEdoState();
                    removeSingleNode(dragDivs, 12);
                }
                else{
                    unMatch()
                    cheerMe.stateThirteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


ekitiStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const ekitiStateName = ekitiStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === ekitiStateName){
                    ekitiStateId.classList.add('ekiti_color')
                    match()
                    cheerMe.stateFourteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableEkitiState()
                    removeSingleNode(dragDivs, 13);
                }
                else{
                    unMatch()
                    cheerMe.stateFifteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


enuguStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const enuguStateName = enuguStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === enuguStateName){
                    enuguStateId.classList.add('enugu_color')
                    match()
                    cheerMe.stateFifteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableEnuguState()
                    removeSingleNode(dragDivs, 14);
                }
                else{
                    unMatch()
                    cheerMe.stateFifteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


gombeStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const gombeStateName = gombeStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === gombeStateName){
                    gombeStateId.classList.add('gombe_color')
                    match()
                    cheerMe.stateSixteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableGombeState()
                    removeSingleNode(dragDivs, 15);
                }
                else{
                    unMatch()
                    cheerMe.stateSixteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})



imoStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const imoStateName = imoStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === imoStateName){
                    imoStateId.classList.add('imo_color')
                    match()
                    cheerMe.stateSeventeenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableImoState()
                    removeSingleNode(dragDivs, 16);
                }
                else{
                    unMatch()
                    cheerMe.stateSeventeenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


jigawaStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const jigawaStateName = jigawaStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === jigawaStateName){
                    jigawaStateId.classList.add('jigawa_color')
                    match()
                    cheerMe.stateEighteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableJigawaState()
                    removeSingleNode(dragDivs, 17);
                }
                else{
                    unMatch()
                    cheerMe.stateEighteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


kadunaStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const kadunaStateName = kadunaStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === kadunaStateName){
                    kadunaStateId.classList.add('kaduna_color')
                    match()
                    cheerMe.stateNineteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableKadunaState()
                    removeSingleNode(dragDivs, 18);
                }
                else{
                    unMatch()
                    cheerMe.stateNineteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


kanoStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const kanoStateName = kanoStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === kanoStateName){
                    kanoStateId.classList.add('kano_color')
                    match()
                    cheerMe.stateTweentyCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableKanoState()
                    removeSingleNode(dragDivs, 19);
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


katsinaStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const katsinaStateName = katsinaStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === katsinaStateName){
                    katsinaStateId.classList.add('katsina_color')
                    match()
                    cheerMe.stateTweentyOneCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableKatsinaState()
                    removeSingleNode(dragDivs, 20);
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyOneUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch  
        }
})


kebbiStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const kebbiStateName = kebbiStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === kebbiStateName){
                    kebbiStateId.classList.add('kebbi_color')
                    match()
                    cheerMe.stateTweentyTwoCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch
                    // disableKebbiState()
                    removeSingleNode(dragDivs, 21);
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyTwoUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch;
        }
})


kogiStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const kogiStateName = kogiStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === kogiStateName){
                    kogiStateId.classList.add('kogi_color')
                    match()
                    cheerMe.stateTweentyThreeCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableKogiState()
                    removeSingleNode(dragDivs, 22);
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyThreeUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


kwaraStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const kwaraStateName = kwaraStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === kwaraStateName){
                    kwaraStateId.classList.add('kwara_color')
                    match()
                    cheerMe.stateTweentyFourCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableKwaraState()
                    removeSingleNode(dragDivs, 23);
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyFourUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


lagosStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const lagosStateName = lagosStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === lagosStateName){
                    lagosStateId.classList.add('lagos_color')
                    match()
                    cheerMe.stateTweentyFiveCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableLagosState()
                    removeSingleNode(dragDivs, 24);
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyFiveUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch  
        }
})



nassarawaStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const nassarawaStateName = nassarawaStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === nassarawaStateName){
                    nassarawaStateId.classList.add('nassarawa_color')
                    match()
                    cheerMe.stateTweentySixCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableNassarawaState()
                    removeSingleNode(dragDivs, 25);
                }
                else{
                    unMatch()
                    cheerMe.stateTwentySixUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


nigerStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const nigerStateName = nigerStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === nigerStateName){
                    nigerStateId.classList.add('niger_color')
                    match()
                    cheerMe.stateTweentySevenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableNigerState()
                    removeSingleNode(dragDivs, 26);
                }
                else{                    
                    unMatch()
                    cheerMe.stateTwentySevenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch  
        }
})


ogunStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const ogunStateName = ogunStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === ogunStateName){
                    ogunStateId.classList.add('ogun_color')                 
                    match()
                    cheerMe.stateTweentyEightCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableOgunState()
                    removeSingleNode(dragDivs, 27);
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyEightUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


ondoStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const ondoStateName = ondoStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === ondoStateName){
                    ondoStateId.classList.add('ondo_color')                                  
                    match()
                    cheerMe.stateTweentyNineCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableOndoState()
                    removeSingleNode(dragDivs, 28);
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyNinetUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


osunStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const osunStateName = osunStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === osunStateName){
                    osunStateId.classList.add('osun_color')                        
                    match()
                    cheerMe.stateThirtyCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableOsunState()
                    removeSingleNode(dragDivs, 29);
                }
                else{
                    unMatch()
                    cheerMe.stateThirtyUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


oyoStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const oyoStateName = oyoStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === oyoStateName){
                    oyoStateId.classList.add('oyo_color')                 
                    match()
                    cheerMe.stateThirtyOneCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableOyoState()
                    removeSingleNode(dragDivs, 30);
                }
                else{
                    unMatch()
                    cheerMe.stateThirtyOneUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


plateauStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const plateauStateName = plateauStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === plateauStateName){
                    plateauStateId.classList.add('plateau_color')           
                    match()
                    cheerMe.stateThirtyTwoCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disablePlateauState()
                    removeSingleNode(dragDivs, 31);
                }
                else{
                    unMatch()
                    cheerMe.stateThirtyTwoUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


riversStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const riverStateName = riversStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === riverStateName){
                    riversStateId.classList.add('rivers_color')           
                    match()
                    cheerMe.stateThirtyThreeCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableRiversState()
                    removeSingleNode(dragDivs, 32);
                }
                else{
                    unMatch()
                    cheerMe.stateThirtyThreeUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})



sokotoStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const sokotoStateName = sokotoStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === sokotoStateName){
                    sokotoStateId.classList.add('sokoto_color')                   
                    match()
                    cheerMe.stateThirtyFourCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableSokotoState()
                    removeSingleNode(dragDivs, 33);
                }
                else{                    
                    unMatch()
                    cheerMe.stateThirtyFourUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


tarabaStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const tarabaStateName = tarabaStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === tarabaStateName){
                    tarabaStateId.classList.add('taraba_color')
                    match()
                    cheerMe.stateThirtyFiveCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableTarabaState()
                    removeSingleNode(dragDivs, 34);
                }
                else{
                    unMatch()
                    cheerMe.stateThirtyFiveUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


yobeStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const yobeStateName = yobeStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === yobeStateName){
                        yobeStateId.classList.add('yobe_color')
                    match()
                    cheerMe.stateThirtySixCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableYobeState()
                    removeSingleNode(dragDivs, 35);
                }
                else{ 
                    unMatch()
                    cheerMe.stateThirtySixUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})



zamfaraStateId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const zamfaraStateName = zamfaraStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === zamfaraStateName){
                        zamfaraStateId.classList.add('zamfara_color')
                    match()
                    cheerMe.stateThirtySevenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableZamfaraState()
                    removeSingleNode(dragDivs, 36);
                }
                else{
                    unMatch()
                    cheerMe.stateThirtySevenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})




// count down function
let timerInterval;

 export   function startCountdown() {
      let timeSelect = document.getElementById("timeSelect");
      let countdown = timeSelect.value;

      // Disable the select menu to prevent changing the time
      timeSelect.disabled = true;

      timerInterval = setInterval(function() {
        let minutes = Math.floor(countdown / 60);
        let seconds = countdown % 60;

        // Display the countdown in the format MM:SS within the dropdown
        timeSelect.options[timeSelect.selectedIndex].text = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        // Reduce the countdown by 1 second
        countdown--;

        // If the countdown reaches 0, reload the browser
        if (countdown < 0) {
          clearInterval(timerInterval);
          // Enable the select menu after the countdown finishes
          timeSelect.disabled = false;
          location.reload();
        }
      }, 1000);
    }




    // Add an event listener to start the countdown when a new time is selected
    document.getElementById("timeSelect").addEventListener("change", function() {
      clearInterval(timerInterval); // Clear the previous interval if any
      startCountdown();
    });



 // RESET BUTTON 
 const ResetButton = document.getElementById('reset-button');
 ResetButton.addEventListener('click', ()=>{
     location.reload()
 })

shuffleMaps()