const buttonSound = document.querySelector('.sound')
const audio = new Audio('./assets/audio/ireliaMusic.mp3')
const on = buttonSound.querySelector('.musicOn')
const off = buttonSound.querySelector('.musicOff')

audio.volume = 0.1
audio.pause()

let count = 0

buttonSound.addEventListener('click', (event) =>{

    if(count == 0){

        count = 1
        audio.play()
        on.style.display = "block"
        off.style.display = "none"

    } else if(count == 1){

        count = 0
        audio.pause()
        audio.currentTime = 0
        on.style.display = "none"
        off.style.display = "block"

    }

})