const playSound = (e) =>  {

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const white_key = document.querySelector(`.white[data-key="${e.keyCode}"]`);
  const black_key = document.querySelector(`.black[data-key="${e.keyCode}"]`);

  if(!audio) return; //stop the function from running altogether
  audio.currentTime = 0; //Rewind to the start
  audio.play();

  // group keycodes for each key
  const white_Keys = [65, 83, 68, 70, 71, 72, 74, 75, 76, 190];
  const black_Keys = [87, 69, 84, 89, 85, 79, 80];

  if (white_Keys.includes(e.keyCode)) {
    white_key.classList.add('white--playing');
  }

  if (black_Keys.includes(e.keyCode)) {
    black_key.classList.add('black--playing');
  } 
}

const removeTransition = (key) => {
  if (key.classList.contains('white--playing')) {
    key.classList.remove('white--playing');
  }

  if (key.classList.contains('black--playing')) {
    key.classList.remove('black--playing');
  }

}

const white_keys = document.querySelectorAll('.white');
white_keys.forEach(key => key.addEventListener('transitionend', (e) => {
  removeTransition(key);
}));

const black_keys = document.querySelectorAll('.black');
black_keys.forEach(key => key.addEventListener('transitionend', (e) => {
  removeTransition(key);
}));

window.addEventListener('keydown', playSound);