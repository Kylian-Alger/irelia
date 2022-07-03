// DOM //
// Category Divine
const divineRecall$ = document.querySelector('.divineRecall')
const divinePassive$ = document.querySelector('.divinePassive')
const divineFirstPower$ = document.querySelector('.divineFirstPower')
const divineSecondPower$ = document.querySelector('.divineSecondPower')
const divineThirdPower$ = document.querySelector('.divineThirdPower')
const divineUlt$ = document.querySelector('.divineUlt')
const divineVideo$ = document.querySelector('.divineVideo')

// Category HighNoon
const highNoonRecall$ = document.querySelector('.highNoonRecall')
const highNoonPassive$ = document.querySelector('.highNoonPassive')
const highNoonFirstPower$ = document.querySelector('.highNoonFirstPower')
const highNoonSecondPower$ = document.querySelector('.highNoonSecondPower')
const highNoonThirdPower$ = document.querySelector('.highNoonThirdPower') 
const highNoonUlt$ = document.querySelector('.highNoonUlt')
const highNoonVideo$ = document.querySelector('.highNoonVideo')

// Category Sentinel
const sentinelRecall$ = document.querySelector('.sentinelRecall')
const sentinelPassive$ = document.querySelector('.sentinelPassive')
const sentinelFirstPower$ = document.querySelector('.sentinelFirstPower')
const sentinelSecondPower$ = document.querySelector('.sentinelSecondPower')
const sentinelThirdPower$ = document.querySelector('.sentinelThirdPower') 
const sentinelUlt$ = document.querySelector('.sentinelUlt')
const sentinelVideo$ = document.querySelector('.sentinelVideo')

// EVENTS //
// Category HighNoon
highNoonRecall$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaHighNoonRecall.mp4" 
})

highNoonPassive$.addEventListener('click', ()=>{
    highNoonVideo$.src ="./assets/video/ireliaHighNoonPassive.mp4"
})

highNoonFirstPower$.addEventListener('click', ()=>{
    highNoonVideo$.src ="./assets/video/ireliaHighNoonQ.mp4"
})

highNoonSecondPower$.addEventListener('click', ()=>{
    highNoonVideo$.src ="./assets/video/ireliaHighNoonW.mp4"
})

highNoonThirdPower$.addEventListener('click', ()=>{
    highNoonVideo$.src ="./assets/video/ireliaHighNoonE.mp4"
})

highNoonUlt$.addEventListener('click', ()=>{
    highNoonVideo$.src ="./assets/video/ireliaHighNoonR.mp4"
})

// Category Sentinel
sentinelRecall$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelRecall.mp4" 
})

sentinelPassive$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelPassive.mp4"
})

sentinelFirstPower$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelQ.mp4"
})

sentinelSecondPower$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelW.mp4"
})

sentinelThirdPower$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelE.mp4"
})

sentinelUlt$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelR.mp4"
})

// Category Divine
divineRecall$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivineRecall.mp4" 
})

divinePassive$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivinePassive.mp4"
})

divineFirstPower$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivineQ.mp4"
})

divineSecondPower$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivineW.mp4"
})

divineThirdPower$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivineE.mp4"
})

divineUlt$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivineR.mp4"
})


