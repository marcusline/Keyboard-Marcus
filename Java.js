// När man öppnar hemsidan så börjar spelet, load är för hemsian "loading" och init är spelets start function.
window.addEventListener('load', init)

//var press = event.which || event.keyCode;
//  document.getElementById(KeyA).style.color = "grey";
document.addEventListener('keydown', function(event) {
        console.log(event.code);
          document.getElementById(event.code).style.backgroundColor="Purple";

  setTimeout(function () {
  document.getElementById(event.code).style.backgroundColor = "black";
}, 100);
})

//Epic score och time
let time = 5;
let score = 0;
let isPlaying;

// Elements som jag använder i spelet.
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
// Ord lista
const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//Start game
function init() {
  console.log('init');
  //Laddar fram ett ord från listan av Ord
  showWord(words);
}

//Ta fram och visa ord från listan
function showWord(words){
  // generate random index från words.
  const random = Math.floor(Math.random() *  words.length);
  currentWord.innerHTML = words[randIndex];

}
