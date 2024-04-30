const allStatesTiles = document.querySelectorAll('path')
const eachStateMap = document.querySelectorAll('img')


// RETRIVE ID OF EACH SVG STATE TO BE USE IN THERE RESPECTIVE FUNCTION
 let stateID = {
        abiaStateId: document.getElementById('NGA2841'),
        abujaStateId: document.getElementById('NGA3470'),
        adamawaStateId:  document.getElementById('NGA2881'),
        akwa_ibomStateId: document.getElementById('NGA2842'),
        anambraStateId: document.getElementById('NGA2857'),
        bauchiStateId: document.getElementById('NGA2858'),
        bayelsaStateId: document.getElementById('NGA2845'),
        benueStateId: document.getElementById('NGA2846'), 
        bornoStateId: document.getElementById('NGA2839'),
        cross_riverStateId: document.getElementById('NGA2847'),
        deltaStateId: document.getElementById('NGA2860'),
        ebonyiStateId: document.getElementById('NGA2863'),
        edoStateId: document.getElementById('NGA2861'),
        ekitiStateId: document.getElementById('NGA2854'),
        enuguStateId: document.getElementById('NGA2862'),
        gombeStateId: document.getElementById('NGA2859'),
        imoStateId: document.getElementById('NGA2843'),
        jigawaStateId: document.getElementById('NGA2868'),
        kadunaStateId: document.getElementById('NGA2864'),
        kanoStateId: document.getElementById('NGA2869'),
        katsinaStateId:  document.getElementById('NGA2870'),
        kebbiStateId:  document.getElementById('NGA2879'),
        kogiStateId:  document.getElementById('NGA2865'),
        kwaraStateId:  document.getElementById('NGA2849'),
        lagosStateId:  document.getElementById('NGA2850'),
        nassarawaStateId:  document.getElementById('NGA2867'),
        nigerStateId:  document.getElementById('NGA2851'),
        ogunStateId:  document.getElementById('NGA2852'),
        ondoStateId:  document.getElementById('NGA2853'),
        osunStateId:  document.getElementById('NGA2855'),
        oyoStateId:  document.getElementById('NGA2856'),
        plateauStateId:  document.getElementById('NGA2866'),
        riversStateId:  document.getElementById('NGA2844'),
        sokotoStateId:  document.getElementById('NGA2871'),
        tarabaStateId:  document.getElementById('NGA2848'),
        yobeStateId:  document.getElementById('NGA2873'),
        zamfaraStateId:  document.getElementById('NGA2872')
}

// let myAbiaState = console.log(stateID.abiaStateId)
// export default myAbiaState 

const stateIDJson = JSON.stringify(stateID)

    export default stateIDJson

    localStorage.setItem('state', stateIDJson)
    // console.log(stateIDJson)



// export {
//     // arrays of
//     allStatesTiles, eachStateMap,

//     // each state
//     abiaStateId, abujaStateId, adamawaStateId, akwa_ibomStateId, anambraStateId,
//     bauchiStateId, bayelsaStateId, benueStateId, bornoStateId, cross_riverStateId,
//     deltaStateId, ebonyiStateId, edoStateId, ekitiStateId, enuguStateId, gombeStateId,
//     imoStateId, jigawaStateId, kadunaStateId, kanoStateId, katsinaStateId, kebbiStateId,
//     kogiStateId, kwaraStateId, nassarawaStateId, nigerStateId, ondoStateId, osunStateId,
//     oyoStateId, plateauStateId, riversStateId, sokotoStateId, tarabaStateId, yobeStateId,
//     zamfaraStateId, ogunStateId, lagosStateId
// };





