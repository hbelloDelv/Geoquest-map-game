const allStatesTiles = document.querySelectorAll('path')
const eachStateMap = document.querySelectorAll('img')


// RETRIVE ID OF EACH SVG STATE TO BE USE IN THERE RESPECTIVE FUNCTION
const abiaStateId = document.getElementById('NGA2841');
const abujaStateId = document.getElementById('NGA3470');
const adamawaStateId = document.getElementById('NGA2881');
const akwa_ibomStateId = document.getElementById('NGA2842');
const anambraStateId = document.getElementById('NGA2857');
const bauchiStateId = document.getElementById('NGA2858');
const bayelsaStateId = document.getElementById('NGA2845');
const benueStateId = document.getElementById('NGA2846'); 
const bornoStateId = document.getElementById('NGA2839');
const cross_riverStateId = document.getElementById('NGA2847')
const deltaStateId = document.getElementById('NGA2860')
const ebonyiStateId = document.getElementById('NGA2863');
const edoStateId = document.getElementById('NGA2861')
const ekitiStateId = document.getElementById('NGA2854');
const enuguStateId = document.getElementById('NGA2862')
const gombeStateId = document.getElementById('NGA2859');
const imoStateId = document.getElementById('NGA2843')
const jigawaStateId = document.getElementById('NGA2868')
const kadunaStateId = document.getElementById('NGA2864')
const kanoStateId = document.getElementById('NGA2869')
const katsinaStateId = document.getElementById('NGA2870')
const kebbiStateId = document.getElementById('NGA2879')
const kogiStateId = document.getElementById('NGA2865')
const kwaraStateId = document.getElementById('NGA2849')
const lagosStateId = document.getElementById('NGA2850')
const nassarawaStateId = document.getElementById('NGA2867')
const nigerStateId = document.getElementById('NGA2851')
const ogunStateId = document.getElementById('NGA2852')
const ondoStateId = document.getElementById('NGA2853')
const osunStateId = document.getElementById('NGA2855')
const oyoStateId = document.getElementById('NGA2856')
const plateauStateId = document.getElementById('NGA2866')
const riversStateId = document.getElementById('NGA2844')
const sokotoStateId = document.getElementById('NGA2871')
const tarabaStateId = document.getElementById('NGA2848')
const yobeStateId = document.getElementById('NGA2873')
const zamfaraStateId = document.getElementById('NGA2872')




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
                    disableAbiaState()
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
                    disableAujaState()
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
                    disableAdamawaState()
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
                    disableAkwa_IbomState()
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
                    disableAnambraState()
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
                    disableBauchiState()
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
                    disableBayelsaState()
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
                    disableBenueState()
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
                    disableBornoState()
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
                    disableCross_RiverState()
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
                    disableDeltaState()
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
                    disableEbonyiState()
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
                    disableEdoState()
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
                    disableEkitiState()
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
                    disableEnuguState()
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
                    disableGombeState()
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
                    disableImoState()
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
                    disableJigawaState()
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
                    disableKadunaState()
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
                    disableKanoState()
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
                    disableKatsinaState()
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
                    disableKebbiState()
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
                    disableKogiState()
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
                    disableKwaraState()
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
                    disableLagosState()
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
                    disableNassarawaState()
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
                    disableNigerState()
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
                    disableOgunState()
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
                    disableOndoState()
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
                    disableOsunState()
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
                    disableOyoState()
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
                    disablePlateauState()
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
                    disableRiversState()
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
                    disableSokotoState()
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
                    disableTarabaState()
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
                    disableYobeState()
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
                    disableZamfaraState()
                }
                else{
                    unMatch()
                    cheerMe.stateThirtySevenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})



// Disable the state when match
function disableAbiaState() {
    const abiaDisable = document.querySelector('.abia-one');
    abiaDisable.style.backgroundColor = 'gainsboro'
    const abiImage = abiaDisable.childNodes[1]
    abiImage.style.cursor = 'not-allowed';  
    abiImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}

function disableAujaState() {
    const abujaDisable = document.querySelector('.abuja-two');
    abujaDisable.style.backgroundColor = 'gainsboro'
    const abujaImage = abujaDisable.childNodes[1]
    abujaImage.style.cursor = 'not-allowed';  
    abujaImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableAdamawaState() {
    const adamawaDisable = document.querySelector('.adamawa-three');
    adamawaDisable.style.backgroundColor = 'gainsboro'
    const adamawaImage =  adamawaDisable.childNodes[1]
    adamawaImage.style.cursor = 'not-allowed';  
    adamawaImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableAkwa_IbomState() {
    const akwa_IbomDisable = document.querySelector('.akwa_ibom-four');
    akwa_IbomDisable.style.backgroundColor = 'gainsboro'
    const akwa_IbomImage =  akwa_IbomDisable.childNodes[1]
    akwa_IbomImage.style.cursor = 'not-allowed';  
    akwa_IbomImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableAnambraState() {
    const anambraDisable = document.querySelector('.anambra-five');
    anambraDisable.style.backgroundColor = 'gainsboro'
    const anambraImage =  anambraDisable.childNodes[1]
    anambraImage.style.cursor = 'not-allowed';  
    anambraImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableBauchiState() {
    const bauchiDisable = document.querySelector('.bauchi-six');
    bauchiDisable.style.backgroundColor = 'gainsboro'
    const bauchiImage =  bauchiDisable.childNodes[1]
    bauchiImage.style.cursor = 'not-allowed';  
    bauchiImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableBayelsaState() {
    const bayelsaDisable = document.querySelector('.bayelsa-seven');
    bayelsaDisable.style.backgroundColor = 'gainsboro'
    const bayelsaImage =  bayelsaDisable.childNodes[1]
    bayelsaImage.style.cursor = 'not-allowed';  
    bayelsaImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableBenueState() {
    const benueDisable = document.querySelector('.benue-eight');
    benueDisable.style.backgroundColor = 'gainsboro'
    const benueImage =  benueDisable.childNodes[1]
    benueImage.style.cursor = 'not-allowed';  
    benueImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableBornoState() {
    const bornoDisable = document.querySelector('.borno-nine');
    bornoDisable.style.backgroundColor = 'gainsboro'
    const bornoImage =  bornoDisable.childNodes[1]
    bornoImage.style.cursor = 'not-allowed';  
    bornoImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableCross_RiverState() {
    const cross_riverDisable = document.querySelector('.cross_river-ten');
    cross_riverDisable.style.backgroundColor = 'gainsboro'
    const cross_riverImage =  cross_riverDisable.childNodes[1]
    cross_riverImage.style.cursor = 'not-allowed';  
    cross_riverImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableDeltaState() {
    const deltaDisable = document.querySelector('.delta-eleven');
    deltaDisable.style.backgroundColor = 'gainsboro'
    const deltaImage =  deltaDisable.childNodes[1]
    deltaImage.style.cursor = 'not-allowed';  
    deltaImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableEbonyiState() {
    const ebonyiDisable = document.querySelector('.ebonyi-twelve');
    ebonyiDisable.style.backgroundColor = 'gainsboro'
    const ebonyiImage =  ebonyiDisable.childNodes[1]
    ebonyiImage.style.cursor = 'not-allowed';  
    ebonyiImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableEdoState() {
    const edoDisable = document.querySelector('.edo-thirteen');
    edoDisable.style.backgroundColor = 'gainsboro'
    const edoImage =  edoDisable.childNodes[1]
    edoImage.style.cursor = 'not-allowed';  
    edoImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableEkitiState() {
    const ekitiDisable = document.querySelector('.ekiti-fourteen');
    ekitiDisable.style.backgroundColor = 'gainsboro'
    const ekitiImage =  ekitiDisable.childNodes[1]
    ekitiImage.style.cursor = 'not-allowed';  
    ekitiImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableEnuguState() {
    const enuguDisable = document.querySelector('.enugu-fifteen');
    enuguDisable.style.backgroundColor = 'gainsboro'
    const enuguImage =  enuguDisable.childNodes[1]
    enuguImage.style.cursor = 'not-allowed';  
    enuguImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableGombeState() {
    const gombeDisable = document.querySelector('.gombe-sixteen');
    gombeDisable.style.backgroundColor = 'gainsboro'
    const gombeImage =  gombeDisable.childNodes[1]
    gombeImage.style.cursor = 'not-allowed';  
    gombeImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableImoState() {
    const imoDisable = document.querySelector('.imo-seventeen');
    imoDisable.style.backgroundColor = 'gainsboro'
    const imoImage =  imoDisable.childNodes[1]
    imoImage.style.cursor = 'not-allowed';  
    imoImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableJigawaState() {
    const jigawaDisable = document.querySelector('.jigawa-eighteen');
    jigawaDisable.style.backgroundColor = 'gainsboro'
    const jigawaImage =  jigawaDisable.childNodes[1]
    jigawaImage.style.cursor = 'not-allowed';  
    jigawaImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableKadunaState() {
    const kadunaDisable = document.querySelector('.kaduna-nineteen');
    kadunaDisable.style.backgroundColor = 'gainsboro'
    const kadunaImage =  kadunaDisable.childNodes[1]
    kadunaImage.style.cursor = 'not-allowed';  
    kadunaImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableKanoState() {
    const kanoDisable = document.querySelector('.kano-twenty');
    kanoDisable.style.backgroundColor = 'gainsboro'
    const kanoImage =  kanoDisable.childNodes[1]
    kanoImage.style.cursor = 'not-allowed';  
    kanoImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableKatsinaState() {
    const katsinaDisable = document.querySelector('.katsina-twenty-one');
    katsinaDisable.style.backgroundColor = 'gainsboro'
    const katsinaImage =  katsinaDisable.childNodes[1]
    katsinaImage.style.cursor = 'not-allowed';  
    katsinaImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableKebbiState() {
    const kebbiDisable = document.querySelector('.kebbi-twenty-two');
    kebbiDisable.style.backgroundColor = 'gainsboro'
    const kebbiImage =  kebbiDisable.childNodes[1]
    kebbiImage.style.cursor = 'not-allowed';  
    kebbiImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableKogiState() {
    const kogiDisable = document.querySelector('.kogi-twenty-three');
    kogiDisable.style.backgroundColor = 'gainsboro'
    const kogiImage =  kogiDisable.childNodes[1]
    kogiImage.style.cursor = 'not-allowed';  
    kogiImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableKwaraState() {
    const kwaraDisable = document.querySelector('.kwara-twenty-four');
    kwaraDisable.style.backgroundColor = 'gainsboro'
    const kwaraImage =  kwaraDisable.childNodes[1]
    kwaraImage.style.cursor = 'not-allowed';  
    kwaraImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableLagosState() {
    const lagosDisable = document.querySelector('.lagos-twenty-five');
    lagosDisable.style.backgroundColor = 'gainsboro'
    const lagosImage =  lagosDisable.childNodes[1]
    lagosImage.style.cursor = 'not-allowed';  
    lagosImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableNassarawaState() {
    const nassarawaDisable = document.querySelector('.nassarawa-twenty-six');
    nassarawaDisable.style.backgroundColor = 'gainsboro'
    const nassarawaImage =  nassarawaDisable.childNodes[1]
    nassarawaImage.style.cursor = 'not-allowed';  
    nassarawaImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableNigerState() {
    const nigerDisable = document.querySelector('.niger-twenty-seven');
    nigerDisable.style.backgroundColor = 'gainsboro'
    const nigerImage =  nigerDisable.childNodes[1]
    nigerImage.style.cursor = 'not-allowed';  
    nigerImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableOgunState() {
    const ogunDisable = document.querySelector('.ogun-twenty-eight');
    ogunDisable.style.backgroundColor = 'gainsboro'
    const ogunImage =  ogunDisable.childNodes[1]
    ogunImage.style.cursor = 'not-allowed';  
    ogunImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableOndoState() {
    const ondoDisable = document.querySelector('.ondo-twenty-nine');
    ondoDisable.style.backgroundColor = 'gainsboro'
    const ondoImage =  ondoDisable.childNodes[1]
    ondoImage.style.cursor = 'not-allowed';  
    ondoImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableOsunState() {
    const osunDisable = document.querySelector('.osun-thirty');
    osunDisable.style.backgroundColor = 'gainsboro'
    const osunImage =  osunDisable.childNodes[1]
    osunImage.style.cursor = 'not-allowed';  
    osunImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disableOyoState() {
    const oyoDisable = document.querySelector('.oyo-thirty-one');
    oyoDisable.style.backgroundColor = 'gainsboro'
    const oyoImage =  oyoDisable.childNodes[1]
    oyoImage.style.cursor = 'not-allowed';  
    oyoImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}



function disablePlateauState() {
    const plateauDisable = document.querySelector('.plateau-thirty-two');
    plateauDisable.style.backgroundColor = 'gainsboro'
    const plateauImage =  plateauDisable.childNodes[1]
    plateauImage.style.cursor = 'not-allowed';  
    plateauImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableSokotoState() {
    const sokotoDisable = document.querySelector('.sokoto-thirty-four');
    sokotoDisable.style.backgroundColor = 'gainsboro'
    const sokotoImage =  sokotoDisable.childNodes[1]
    sokotoImage.style.cursor = 'not-allowed';  
    sokotoImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableRiversState() {
    const riversDisable = document.querySelector('.rivers-thirty-three');
    riversDisable.style.backgroundColor = 'gainsboro'
    const riversImage =  riversDisable.childNodes[1]
    riversImage.style.cursor = 'not-allowed';  
    riversImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableTarabaState() {
    const tarabaDisable = document.querySelector('.taraba-thirty-five');
    tarabaDisable.style.backgroundColor = 'gainsboro'
    const tarabaImage =  tarabaDisable.childNodes[1]
    tarabaImage.style.cursor = 'not-allowed';  
    tarabaImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableYobeState() {
    const yobeDisable = document.querySelector('.yobe-thirty-six');
    yobeDisable.style.backgroundColor = 'gainsboro'
    const yobeImage =  yobeDisable.childNodes[1]
    yobeImage.style.cursor = 'not-allowed';  
    yobeImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}


function disableZamfaraState() {
    const zamfaraDisable = document.querySelector('.zamfara-thirty-seven');
    zamfaraDisable.style.backgroundColor = 'gainsboro'
    const zamfaraImage =  zamfaraDisable.childNodes[1]
    zamfaraImage.style.cursor = 'not-allowed';  
    zamfaraImage.addEventListener('dragstart', function(e){
        e.preventDefault()
    })
}




// This is added to each SVG element
function dragOver(event) {
    event.preventDefault() 
    
}


// const smileEmoji = '&#x1F60A;'
// const sadEmoji = '&#x1F61E;'
const emojiDiv= document.getElementById('emoji-reaction')
// emojiDiv.innerHTML = smileEmoji;
// emojiDiv.innerHTML = sadEmoji;



// The below code is responsible for tracking the number of match and unmatch
const cheerMeDiv = document.getElementById('cheer-me')

const cheerMe = {
    state_one: 'Fantastic!',
    state_two: 'Great job!',
    state_three: 'Excellent!',
    state_four: 'Perfect match!',
    state_five: 'Wonderful!',
    state_six: 'Awesome!',
    state_seven: 'Terrific!',
    state_eight: 'Superb!',
    state_nine: 'Outstanding!',
    state_ten: 'You nailed it!',
    state_eleven: 'Spot on!',
    state_twelve: 'Bravo!',
    state_thirteen: 'Amazing!',
    state_fourteen: 'Well done!',
    state_fifteen: 'Impressive!',
    state_sixteen: 'Good work!',
    state_seventeen: 'Nice one!',
    state_eighteen: 'Stellar!',
    state_nineteen: 'Way to go!',
    state_twenty: 'You\'re a pro!',
    state_twenty_one: 'Keep it up!',
    state_twenty_two: 'Genius!',
    state_twenty_three: 'You rock!',
    state_twenty_four: 'Top-notch!',
    state_twenty_five: 'Incredible!',
    state_twenty_six: 'Marvelous!',
    state_twenty_seven: 'Splendid!',
    state_twenty_eight: 'Right on target!',
    state_twenty_nine: 'Aced it!',
    state_twenty_nine: 'Flawless!',
    state_twenty_nine: 'You\'re killing it!',
    state_thirty: 'A perfect match!',
    state_thirty_one: 'You\'re on fire!',
    state_thirty_two: 'Exceptional!',
    state_thirty_three: 'Unbelievable!',
    state_thirty_four: 'O Boy!',
    state_thirty_five: 'Are you a Jamitan!',
    state_thirty_six: 'You too much',
    state_thirty_seven: 'Dommino!',


    //Uncheer phrases 
    uncheer_one: 'Nice try!',
    uncheer_two: 'Keep going!',
    uncheer_three: 'Dont give up!',
    uncheer_four: 'Learning curve!',
    uncheer_five: 'Almost!',
    uncheer_six: 'Persevere!',
    uncheer_seven: 'Good effort!',
    uncheer_eight: 'Keep practicing!',
    uncheer_nine: 'Great effort!',
    uncheer_ten: 'Progress in the making!',
    uncheer_eleven: 'You\'ll get it!',
    uncheer_twelve: 'You\'ll master it!',
    uncheer_thirteen: 'Success is a step away!',
    uncheer_fourteen: 'Keep that spirit!',
    uncheer_fifteen: 'Learning is fun!',
    uncheer_sixteen: 'You\'re on a journey!',
    uncheer_seventeen: 'Learning experience!',
    uncheer_eigthteen: 'Keep pushing!',
    uncheer_nineteen: 'Try another match!',
    uncheer_twenty: 'Keep your head up!',
    uncheer_twenty_one: 'Your effort matters!',
    uncheer_twenty_two: 'Keep aiming high!',
    uncheer_twenty_three: 'Keep that spirit!',
    uncheer_twenty_four: 'Stay determined!',
    uncheer_twenty_five: 'Positive energy!',
    uncheer_twenty_six: 'Remain focus!',
    uncheer_twenty_seven: 'Attempt counts!',
    uncheer_twenty_eight: 'Effort matters!',
    uncheer_twenty_nine: 'Still a step!',
    uncheer_thirty: 'Worthwhile!',
    uncheer_thirty_one: 'Good going!',
    uncheer_thirty_two: 'Well tried!',
    uncheer_thirty_three: 'Almost there!',
    uncheer_thirty_four: 'Nice attempt!',
    uncheer_thirty_five: 'Well played!',
    uncheer_thirty_six: 'Impressive!',
    uncheer_thirty_seven: 'You\'re close!',

    //Impressions
    smileEmoji: '&#x1F60A;',
    sadEmoji: '&#x1F61E;',

    //sound effects
    winsound: './sound/winsound.mp3',
    retrysound: './sound/retrysound.mp3',
    rollDrum: './sound/finishingDrum.mp3',


    stateOneCheers: function () {
        cheerMeDiv.innerText = this.state_one
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTwoCheers: function () {
        cheerMeDiv.innerText = this.state_two
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThreeCheers: function () {
        cheerMeDiv.innerText = this.state_three
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateFourCheers: function () {
        cheerMeDiv.innerText = this.state_four
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateFiveCheers: function () {
        cheerMeDiv.innerText = this.state_five
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateSixCheers: function () {
        cheerMeDiv.innerText = this.state_six
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateSevenCheers: function () {
        cheerMeDiv.innerText = this.state_seven
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateEightCheers: function () {
        cheerMeDiv.innerText = this.state_eight
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateNineCheers: function () {
        cheerMeDiv.innerText = this.state_nine
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTenCheers: function () {
        cheerMeDiv.innerText = this.state_ten
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateElevenCheers: function () {
        cheerMeDiv.innerText = this.state_eleven
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTwelveCheers: function () {
        cheerMeDiv.innerText = this.state_twelve
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirteenCheers: function () {
        cheerMeDiv.innerText = this.state_thirteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateFourteenCheers: function () {
        cheerMeDiv.innerText = this.state_fourteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateFifteenCheers: function () {
        cheerMeDiv.innerText = this.state_fifteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateSixteenCheers: function () {
        cheerMeDiv.innerText = this.state_sixteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateSeventeenCheers: function () {
        cheerMeDiv.innerText = this.state_seventeen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateEighteenCheers: function () {
        cheerMeDiv.innerText = this.state_eighteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateNineteenCheers: function () {
        cheerMeDiv.innerText = this.state_nineteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyCheers: function () {
        cheerMeDiv.innerText = this.state_twenty
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyOneCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_one
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyTwoCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_two
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyThreeCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_three
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyFourCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_four
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyFiveCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_five
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentySixCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_six
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentySevenCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_seven
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyEightCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_eight
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyNineCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_nine
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyCheers: function () {
        cheerMeDiv.innerText = this.state_thirty
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyOneCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_one
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyTwoCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_two
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyThreeCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_three
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyFourCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_four
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyFiveCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_five
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtySixCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_six
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtySevenCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_seven
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },


    // Uncheers function
    stateOneUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_one
        emojiDiv.innerHTML = this.sadEmoji;
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwoUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_two
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThreeUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_three
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateFourUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_four
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateFiveUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_five
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateSixUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_six
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateSevenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_seven
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateEightUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_eight
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateNineUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_nine
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_ten
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateElevenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_eleven
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwelveUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twelve
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateFourteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_fourteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateFifteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_fifteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateSixteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_sixteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateSeventeenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_seventeen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateEighteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_eigthteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateNineteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_nineteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyOneUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_one
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyTwoUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_two
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyThreeUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_three
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyFourUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_four
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyFiveUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_five
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentySixUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_six
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentySevenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_seven
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyEightUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_eight
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyNinetUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_nine
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyOneUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_one
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyTwoUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_two
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyThreeUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_three
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyFourUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_four
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyFiveUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_five
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtySixUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_six
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtySevenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_seven
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    
    finishingDrum: function () {
        const retrySound = new Audio(this.rollDrum)
        retrySound.play()
    },
}


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




function replaceDiv() {
    // Create a new div
    var newDiv = document.createElement('div');

     // Add CSS styles to center newDiv
     newDiv.style.display = 'flex';
     newDiv.style.justifyContent = 'center';
     newDiv.style.alignItems = 'center';

    var mapPhoto = document.createElement('img');
    mapPhoto.src = './nigMapPhoto.png'
    mapPhoto.width = '800'; // Set the width here
    mapPhoto.height = '550'; // Set the height here
    newDiv.appendChild(mapPhoto)
    

     const leftSection = document.getElementById('left-section')
     const mapDiv = leftSection.children[1]
    //  console.log(mapDiv)
     leftSection.replaceChild(newDiv, mapDiv)
    
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



// confetti function
function addConfetti() {
    // const mapContainer = document.getElementById('map-container');
    const leftSection = document.getElementById('left-section')
    
    // Create a confetti element
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Set random initial position
    const initialX = Math.random() * leftSection.clientWidth;
    const initialY = Math.random() * leftSection.clientHeight;
    const initialRotation = Math.random() * 360;
    
    confetti.style.left = `${initialX}px`;
    confetti.style.top = `${initialY}px`;
    confetti.style.transform = `rotate(${initialRotation}deg)`;
    
    // Append confetti to the map container
    leftSection.appendChild(confetti);
    
    // Remove confetti element after the animation ends
    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }


  





// count down function
let timerInterval;

    function startCountdown() {
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
 

 
 // Shuffle the divs
 const dragDivs = document.querySelectorAll('.dragable-div');



 function shuffleItems() {
     const parent = dragDivs[0].parentNode;
     for (let i = dragDivs.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         parent.insertBefore(dragDivs[j], dragDivs[i]);
     }
 }

 console.log(dragDivs)

 shuffleItems()

