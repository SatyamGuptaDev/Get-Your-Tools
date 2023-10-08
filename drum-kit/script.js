// //Making a website a plays drum kit sounds with keys from keyboard A to L
// //and mouse click on the buttons


window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.drum-key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running all together

    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');

    console.log(`Keydown event: Key ${e.keyCode} is pressed.`);
});


const keys = document.querySelectorAll('.drum-key');
keys.forEach(key => key.addEventListener('click', function(e) {
    const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
    const key = document.querySelector(`.key[data-key="${this.dataset.key}"]`);
    if (!audio) return; //stop the function from running all together

    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');

    console.log(`Click event: Key ${this.dataset.key} is clicked.`);
}));

const ke = document.querySelectorAll('.drum-key');
ke.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    console.log(e.propertyName);
    
    this.classList.remove('playing');
    console.log('Transition ended for key:', this.dataset.key);
}
