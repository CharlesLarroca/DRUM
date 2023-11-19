"user strict";

const $container = document.querySelector("#container");

const sounds = {
  "A": "boom.wav",
  "S": "clap.wav",
  "D": "hihat.wav",
  "F": "kick.wav",
  "G": "openhat.wav",
  "H": "ride.wav",
  "J": "snare.wav",
  "K": "tink.wav",
  "L": "tom.wav",
};

const createDiv = (text) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = text;
  div.id = text;
  $container.appendChild(div);
};

const showSounds = (sounds) => Object.keys(sounds).forEach(createDiv);

const playSound = (letter) => {
  const audio = new Audio(`./sounds/${sounds[letter]}`)
  audio.play()
}

const addEffect = (letter) => {
  document.getElementById(letter)
  .classList.toggle('active')
}

const removeEffect = (letter) => {
  const div = document.getElementById(letter) 
  const removeActive = () => div.classList.remove('active')
  div.addEventListener('transitionend', removeActive)
}

const activeDiv = (e) => {
  const letter = e.type == 'click' ? e.target.id : e.key.toUpperCase()
  const letterExist = sounds.hasOwnProperty(letter)
  if(letterExist){
    addEffect(letter)
    playSound(letter)
    removeEffect(letter)
  }
}

$container.addEventListener('click', activeDiv)

showSounds(sounds);

window.addEventListener('keypress', activeDiv)
