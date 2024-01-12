const allStatesTiles = document.querySelectorAll('path')
const eachStateMap = document.querySelectorAll('img')


// RETRIVE ID OF EACH 'PATH' OF THE SVG BELONGING TO A STATE TO BE USE IN THERE RESPECTIVE FUNCTION
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



let message;

let totalMatch = 0;
let totalUnMatch = 0;


function match(){
    message = "Good job"
    alert(message)
    totalMatch++
}


function unMatch(){
    message = "Not match - try again"
    alert(message)
    totalUnMatch++
}


const MapData = {
    Abia: abiaStateId,
    Abuja: abujaStateId,
    Adamawa: adamawaStateId,
    Akwa_Ibom: akwa_ibomStateId,
    Anambra: anambraStateId,
    Bauchi: bauchiStateId,
    Bayelsa: bayelsaStateId,
    Benue: benueStateId,
    Borno: bornoStateId,
    Cross_River: cross_riverStateId,
    Delta: deltaStateId,
    Ebonyi: ebonyiStateId,
    Edo: edoStateId,
    Ekiti: ekitiStateId,
    Enugu: enuguStateId,
    Gombe: gombeStateId,
    Imo: imoStateId,
    Jigawa: jigawaStateId,
    Kaduna: kadunaStateId,
    Kano: kanoStateId,
    Katsina: katsinaStateId,
    Kebbi: kebbiStateId,
    Kogi: kogiStateId,
    Kwara: kwaraStateId,
    Lagos: lagosStateId,
    Nasarawa: nassarawaStateId,
    Niger: nigerStateId,
    Ogun: ogunStateId,
    Ondo: ondoStateId,
    Osun: osunStateId,
    Oyo: oyoStateId,
    Plateau: plateauStateId,
    Rivers: riversStateId,
    Sokoto: sokotoStateId,
    Taraba: tarabaStateId,
    Yobe: yobeStateId,
    Zamfara: zamfaraStateId,
    totalMatch: totalMatch,
    totalUnMatch: totalUnMatch,
}

const mapDataToJSON = JSON.stringify(MapData)
localStorage.setItem('mapstate', mapDataToJSON);





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
MapData.Abia.addEventListener('drop', (e)=>{
    e.preventDefault()
    const abiaStateName = abiaStateId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === abiaStateName){
                    MapData.Abia.classList.add('abia_color')
                    match()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch
                    // matchDiv.innerText = MapData.totalMatch
                }
                else{
                    unMatch()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})





// abiaStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const abiaStateName = abiaStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === abiaStateName){
//                     abiaStateId.classList.add('abia_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// abujaStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const abujaStateName = abujaStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === abujaStateName){
//                     abujaStateId.classList.add('abuja_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// adamawaStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const adamawaStateName = adamawaStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === adamawaStateName){
//                     adamawaStateId.classList.add('adamawa_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// akwa_ibomStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const akwa_ibomStateName = akwa_ibomStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === akwa_ibomStateName){
//                     akwa_ibomStateId.classList.add('akwa_ibom_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// anambraStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const anambraStateName = anambraStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === anambraStateName){
//                     anambraStateId.classList.add('anambra_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// bauchiStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const bauchiStateName = bauchiStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === bauchiStateName){
//                     bauchiStateId.classList.add('bauchi_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// bayelsaStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const bayelsaStateName = bayelsaStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === bayelsaStateName){
//                     bayelsaStateId.classList.add('bayelsa_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// benueStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const benueStateName = benueStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === benueStateName){
//                     benueStateId.classList.add('benue_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })



// bornoStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const bornoStateName = bornoStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === bornoStateName){
//                     bornoStateId.classList.add('borno_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// cross_riverStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const cross_riverStateName = cross_riverStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === cross_riverStateName){
//                     cross_riverStateId.classList.add('cross_river_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// deltaStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const deltaStateName = deltaStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === deltaStateName){
//                     deltaStateId.classList.add('delta_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// ebonyiStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const ebonyiStateName = ebonyiStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === ebonyiStateName){
//                     ebonyiStateId.classList.add('ebonyi_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// edoStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const edoStateName = edoStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === edoStateName){
//                     edoStateId.classList.add('edo_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// ekitiStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const ekitiStateName = ekitiStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === ekitiStateName){
//                     ekitiStateId.classList.add('ekiti_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// enuguStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const enuguStateName = enuguStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === enuguStateName){
//                     enuguStateId.classList.add('enugu_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// gombeStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const gombeStateName = gombeStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === gombeStateName){
//                     gombeStateId.classList.add('gombe_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })



// imoStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const imoStateName = imoStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === imoStateName){
//                     imoStateId.classList.add('imo_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// jigawaStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const jigawaStateName = jigawaStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === jigawaStateName){
//                     jigawaStateId.classList.add('jigawa_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// kadunaStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const kadunaStateName = kadunaStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === kadunaStateName){
//                     kadunaStateId.classList.add('kaduna_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// kanoStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const kanoStateName = kanoStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === kanoStateName){
//                     kanoStateId.classList.add('kano_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// katsinaStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const katsinaStateName = katsinaStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === katsinaStateName){
//                     katsinaStateId.classList.add('katsina_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch  
//         }
// })


// kebbiStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const kebbiStateName = kebbiStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === kebbiStateName){
//                     kebbiStateId.classList.add('kebbi_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// kogiStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const kogiStateName = kogiStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === kogiStateName){
//                     kogiStateId.classList.add('kogi_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// kwaraStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const kwaraStateName = kwaraStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === kwaraStateName){
//                     kwaraStateId.classList.add('kwara_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// lagosStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const lagosStateName = lagosStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === lagosStateName){
//                     lagosStateId.classList.add('logos_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch  
//         }
// })



// nassarawaStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const nassarawaStateName = nassarawaStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === nassarawaStateName){
//                     nassarawaStateId.classList.add('nassarawa_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// nigerStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const nigerStateName = nigerStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === nigerStateName){
//                     nigerStateId.classList.add('niger_color')
                    
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{                    
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch  
//         }
// })


// ogunStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const ogunStateName = ogunStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === ogunStateName){
//                     ogunStateId.classList.add('ogun_color')
                    
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// ondoStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const ondoStateName = ondoStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === ondoStateName){
//                     ondoStateId.classList.add('ondo_color')
                                        
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// osunStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const osunStateName = osunStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === osunStateName){
//                     osunStateId.classList.add('osun_color')
                                        
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// oyoStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const oyoStateName = oyoStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === oyoStateName){
//                     oyoStateId.classList.add('oyo_color')
                    
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// plateauStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const plateauStateName = plateauStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === plateauStateName){
//                     plateauStateId.classList.add('plateau_color')
                    
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// riversStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const riverStateName = riversStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === riverStateName){
//                     riversStateId.classList.add('rivers_color')
                    
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })



// sokotoStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const sokotoStateName = sokotoStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === sokotoStateName){
//                     sokotoStateId.classList.add('sokoto_color')
                    
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{                    
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch 
//         }
// })


// tarabaStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const tarabaStateName = tarabaStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === tarabaStateName){
//                         tarabaStateId.classList.add('taraba_color')
                    
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })


// yobeStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const yobeStateName = yobeStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === yobeStateName){
//                         yobeStateId.classList.add('yobe_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{ 
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })



// zamfaraStateId.addEventListener('drop', (e)=>{
//     e.preventDefault()
//     const zamfaraStateName = zamfaraStateId.getAttribute('name')
//     const data = e.dataTransfer.getData("text/plain")
//     if(data === zamfaraStateName){
//                         zamfaraStateId.classList.add('zamfara_color')
//                     match()
//                     const matchDiv = document.getElementById('match')
//                     matchDiv.innerText = totalMatch
//                 }
//                 else{
//                     unMatch()
//                     const unMatchDiv = document.getElementById('un-match')
//                     unMatchDiv.innerText = totalUnMatch
//         }
// })





// This is added to each SVG element
function dragOver(event) {
    event.preventDefault() 
    
}


// The below code is responsible for tracking the number of match and unmatch



// inserting text in the svg element
// var textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");

        // Set attributes for the text element
    /*    textElement.setAttribute("x", "888");
        textElement.setAttribute("y", "255");
        textElement.setAttribute("fill", "white");
        textElement.setAttribute("stroke", "white");
        textElement.setAttribute("font-size", "20");
        textElement.setAttribute("font-family", "sans-serif"); */

        // Set the text content
        // textElement.textContent = "zamfara";

        // Append the text element to the SVG
        // zamfaraStateId.parentNode.appendChild(textElement)

    //  console.log(za)

    // function setCoordinates(stateSvg, stateName) {
    //     var textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    //     stateName.setAttribute("x", "888");
    //     stateName.setAttribute("y", "255");
    //     stateName.setAttribute("fill", "white");
    //     stateName.setAttribute("stroke", "white");
    //     stateName.setAttribute("font-size", "20");
    //     stateName.setAttribute("font-family", "sans-serif");
    //     stateSvg.parentNode.appendChild(stateName)
    // }

    // setCoordinates()


        
    




    // RESET BUTTON 
    const ResetButton = document.getElementById('reset-button');
    ResetButton.addEventListener('click', ()=>{
        // location.reload()
        localStorage.clear('mapstate')
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

    shuffleItems()




/*
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
} */