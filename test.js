// start hangman game! 

prompt('Press any key to get started!');


// list of different species of shark for hangman game.

var sharkTypeArr = ['Whale Shark', 'Great White', 'Hammerhead', 'Sand Shark', 
'Wobbegong','Angel Shark', 'Saw', 'Blacktip','Tiger', 'Shortfin Mako', 'Megalodon', 'Thresher', 'Frilled Shark', 'Helicoprion', 'Lemon','Blue Shark', 'Bull Shark', 'Basking Shark', 'Goblin', 'Nurse']

// using above array we choose a random word.
var sharkType = sharkTypeArr[Math.floor(Math.random() * sharkTypeArr.length)];


// global variables 

var s;
var count = 0;
var answerArray = [];


// filling the answer array with underscores as required
// number of underscores correlates to the randomly selected word in the array

function startUp() {
  for (var i = 0; i < sharkType.length; i++) {
    answerArray[i] = "_";
  }

  // putting in a string
  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;
}

function letter() {
  var letter = document.getElementById("letter").value;

  if (letter.length > 0) {
    for (var i = 0; i < sharkType.length; i ++) {
      if (sharkType[i] === letter) {
        answerArray[i] = letter;
      }
    }
    count++;
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  if(count>5) {
    document.getElementById("stat").innerHTML = "You should have guessed it by now!";
  }
}