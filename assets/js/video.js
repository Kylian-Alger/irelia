// DOM //
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

// Category Divine
const divineRecall$ = document.querySelector('.divineRecall')
const divinePassive$ = document.querySelector('.divinePassive')
const divineFirstPower$ = document.querySelector('.divineFirstPower')
const divineSecondPower$ = document.querySelector('.divineSecondPower')
const divineThirdPower$ = document.querySelector('.divineThirdPower')
const divineUlt$ = document.querySelector('.divineUlt')
const divineVideo$ = document.querySelector('.divineVideo')

// EVENTS //
// Category HighNoon
highNoonRecall$.addEventListener('click', ()=>{
    highNoonVideo$.src ="./assets/video/ireliaHighNoonRecall.mp4" 
    highNoonRecall$.classList.add('activeSkill')
    highNoonPassive$.classList.remove('activeSkill')
    highNoonFirstPower$.classList.remove('activeSkill')
    highNoonSecondPower$.classList.remove('activeSkill')
    highNoonThirdPower$.classList.remove('activeSkill')
    highNoonUlt$.classList.remove('activeSkill')
})

highNoonPassive$.addEventListener('click', ()=>{
    highNoonVideo$.src ="./assets/video/ireliaHighNoonPassive.mp4"
    highNoonRecall$.classList.remove('activeSkill')
    highNoonPassive$.classList.add('activeSkill')
    highNoonFirstPower$.classList.remove('activeSkill')
    highNoonSecondPower$.classList.remove('activeSkill')
    highNoonThirdPower$.classList.remove('activeSkill')
    highNoonUlt$.classList.remove('activeSkill')
})

highNoonFirstPower$.addEventListener('click', ()=>{
    highNoonVideo$.src ="./assets/video/ireliaHighNoonQ.mp4"
    highNoonRecall$.classList.remove('activeSkill')
    highNoonPassive$.classList.remove('activeSkill')
    highNoonFirstPower$.classList.add('activeSkill')
    highNoonSecondPower$.classList.remove('activeSkill')
    highNoonThirdPower$.classList.remove('activeSkill')
    highNoonUlt$.classList.remove('activeSkill')
})

highNoonSecondPower$.addEventListener('click', ()=>{
    highNoonVideo$.src ="./assets/video/ireliaHighNoonW.mp4"
    highNoonRecall$.classList.remove('activeSkill')
    highNoonPassive$.classList.remove('activeSkill')
    highNoonFirstPower$.classList.remove('activeSkill')
    highNoonSecondPower$.classList.add('activeSkill')
    highNoonThirdPower$.classList.remove('activeSkill')
    highNoonUlt$.classList.remove('activeSkill')
})

highNoonThirdPower$.addEventListener('click', ()=>{
    highNoonVideo$.src ="./assets/video/ireliaHighNoonE.mp4"
    highNoonRecall$.classList.remove('activeSkill')
    highNoonPassive$.classList.remove('activeSkill')
    highNoonFirstPower$.classList.remove('activeSkill')
    highNoonSecondPower$.classList.remove('activeSkill')
    highNoonThirdPower$.classList.add('activeSkill')
    highNoonUlt$.classList.remove('activeSkill')
})

highNoonUlt$.addEventListener('click', ()=>{
    highNoonVideo$.src ="./assets/video/ireliaHighNoonR.mp4"
    highNoonRecall$.classList.remove('activeSkill')
    highNoonPassive$.classList.remove('activeSkill')
    highNoonFirstPower$.classList.remove('activeSkill')
    highNoonSecondPower$.classList.remove('activeSkill')
    highNoonThirdPower$.classList.remove('activeSkill')
    highNoonUlt$.classList.add('activeSkill')
})

// Category Sentinel
sentinelRecall$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelRecall.mp4"
    sentinelRecall$.classList.add('activeSkill')
    sentinelPassive$.classList.remove('activeSkill')
    sentinelFirstPower$.classList.remove('activeSkill')
    sentinelSecondPower$.classList.remove('activeSkill')
    sentinelThirdPower$.classList.remove('activeSkill')
    sentinelUlt$.classList.remove('activeSkill')
})

sentinelPassive$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelPassive.mp4"
    sentinelRecall$.classList.remove('activeSkill')
    sentinelPassive$.classList.add('activeSkill')
    sentinelFirstPower$.classList.remove('activeSkill')
    sentinelSecondPower$.classList.remove('activeSkill')
    sentinelThirdPower$.classList.remove('activeSkill')
    sentinelUlt$.classList.remove('activeSkill')
})

sentinelFirstPower$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelQ.mp4"
    sentinelRecall$.classList.remove('activeSkill')
    sentinelPassive$.classList.remove('activeSkill')
    sentinelFirstPower$.classList.add('activeSkill')
    sentinelSecondPower$.classList.remove('activeSkill')
    sentinelThirdPower$.classList.remove('activeSkill')
    sentinelUlt$.classList.remove('activeSkill')
})

sentinelSecondPower$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelW.mp4"
    sentinelRecall$.classList.remove('activeSkill')
    sentinelPassive$.classList.remove('activeSkill')
    sentinelFirstPower$.classList.remove('activeSkill')
    sentinelSecondPower$.classList.add('activeSkill')
    sentinelThirdPower$.classList.remove('activeSkill')
    sentinelUlt$.classList.remove('activeSkill')
})

sentinelThirdPower$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelE.mp4"
    sentinelRecall$.classList.remove('activeSkill')
    sentinelPassive$.classList.remove('activeSkill')
    sentinelFirstPower$.classList.remove('activeSkill')
    sentinelSecondPower$.classList.remove('activeSkill')
    sentinelThirdPower$.classList.add('activeSkill')
    sentinelUlt$.classList.remove('activeSkill')
})

sentinelUlt$.addEventListener('click', ()=>{
    sentinelVideo$.src ="./assets/video/ireliaSentinelR.mp4"
    sentinelRecall$.classList.remove('activeSkill')
    sentinelPassive$.classList.remove('activeSkill')
    sentinelFirstPower$.classList.remove('activeSkill')
    sentinelSecondPower$.classList.remove('activeSkill')
    sentinelThirdPower$.classList.remove('activeSkill')
    sentinelUlt$.classList.add('activeSkill')
})

// Category Divine
divineRecall$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivineRecall.mp4" 
    divineRecall$.classList.add('activeSkill')
    divinePassive$.classList.remove('activeSkill')
    divineFirstPower$.classList.remove('activeSkill')
    divineSecondPower$.classList.remove('activeSkill')
    divineThirdPower$.classList.remove('activeSkill')
    divineUlt$.classList.remove('activeSkill')
})

divinePassive$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivinePassive.mp4"
    divineRecall$.classList.remove('activeSkill')
    divinePassive$.classList.add('activeSkill')
    divineFirstPower$.classList.remove('activeSkill')
    divineSecondPower$.classList.remove('activeSkill')
    divineThirdPower$.classList.remove('activeSkill')
    divineUlt$.classList.remove('activeSkill')
})

divineFirstPower$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivineQ.mp4"
    divineRecall$.classList.remove('activeSkill')
    divinePassive$.classList.remove('activeSkill')
    divineFirstPower$.classList.add('activeSkill')
    divineSecondPower$.classList.remove('activeSkill')
    divineThirdPower$.classList.remove('activeSkill')
    divineUlt$.classList.remove('activeSkill')})

divineSecondPower$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivineW.mp4"
    divineRecall$.classList.remove('activeSkill')
    divinePassive$.classList.remove('activeSkill')
    divineFirstPower$.classList.remove('activeSkill')
    divineSecondPower$.classList.add('activeSkill')
    divineThirdPower$.classList.remove('activeSkill')
    divineUlt$.classList.remove('activeSkill')
})

divineThirdPower$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivineE.mp4"
    divineRecall$.classList.remove('activeSkill')
    divinePassive$.classList.remove('activeSkill')
    divineFirstPower$.classList.remove('activeSkill')
    divineSecondPower$.classList.remove('activeSkill')
    divineThirdPower$.classList.add('activeSkill')
    divineUlt$.classList.remove('activeSkill')
})

divineUlt$.addEventListener('click', ()=>{
    divineVideo$.src ="./assets/video/ireliaDivineR.mp4"
    divineRecall$.classList.remove('activeSkill')
    divinePassive$.classList.remove('activeSkill')
    divineFirstPower$.classList.remove('activeSkill')
    divineSecondPower$.classList.remove('activeSkill')
    divineThirdPower$.classList.remove('activeSkill')
    divineUlt$.classList.add('activeSkill')
})