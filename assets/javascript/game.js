window.onload = function () {

	/* Gets Link for Felix Felicis by Harry and the Potters
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "");

      // Theme Button
      $(".play-button").on("click", function() {
        audioElement.play();
      });

      $(".pause-button").on("click", function() {
        audioElement.pause();
      }); */


	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
	        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
	        't', 'u', 'v', 'w', 'x', 'y', 'z'];

	// Harry Potter Words Array
	var wordBank = ['apparate', 'boggart', 'colloportus', 'densaugeo', 
					'disapparate', 'dissendium', 'engorgio', 'evanesco', 'expelliarmus', 
					'ferula', 'firebolt', 'flobberworm', 'galleon', 'gillyweed', 'gringotts',
					'herbology', 'hippogriff', 'hogsmeade', 'impervius', 'incendio', 'kwikspell', 
					'legilimency', 'lumos', 'mandrake', 'mobiliarbus', 'mudblood', 'nargles', 'obliviate',
					'ollivanders', 'parselmouth', 'patronus', 'pensieve', 'protego', 'quaffle', 'quidditch',
					'reducio', 'relashio', 'remembrall', 'rennervate', 'scourgify', 'seeker', 'silencio', 
					'sonorus', 'transfiguration', 'unspeakable', 'veritaserum', 'wizengamot', 'wolfsbane'];

	// Created function to randomize Words
	var wordRandom = wordBank[Math.floor(Math.random() * wordBank.length)];

	// Set variables for get element by Id 
	var guessesRemaining = document.getElementById("guesses");
	var winCounter = document.getElementById("counter");
	var currentWord = document.getElementById("currentWord");
	var alreadyGuessed = document.getElementById("alreadyGuessed");

	// Set variable to store gesses
	var lettersGuessed = [];

// function startUp() {
//   for (var i = 0; i < wordBank.length; i++) {
//     storeGuess[i] = "_";
//   };


// Create letter buttons from alphabet array when button is clicked it become unclickable until reset
createletterButtons();
function createletterButtons(){
	for (var i = alphabet.length - 1; i >= 0; i--) {
    var newLI = document.createElement("LI");
    newLI.id = "letterButton-"+alphabet[i];
    var alpha = document.createTextNode(alphabet[i]);
    newLI.appendChild(alpha);
    var letterButtonContainer = document.getElementById("letterButtonContainer");
    letterButtonContainer.insertBefore(newLI, letterButtonContainer.firstChild);
	}
}
  
$('#letterButtonContainer li').on('click', function(){
  var clickedLetter = $(this);
  clickedLetter.addClass('alreadychosen');
  if(true){ // on this line we need to check if there are guesses available
    guessesAreAvailable(clickedLetter);
  } else {
    //noGuessesAvailable();
    // if no guesses available prompt to get a new word
  }
});
 

function guessesAreAvailable(e){
    var letterID = e.attr('id').slice(13);
    lettersGuessed.unshift(letterID);

    if(wordRandom.includes(lettersGuessed[0])) {
      var regex = new RegExp(lettersGuessed[0],"g");
      while ((match = regex.exec(wordRandom)) != null) {
        //console.log(match.index);
        replaceCharacters(match.index);
    }

    } else {
      console.log(lettersGuessed[0]+' is not in the word '+ wordRandom);
    }
  };

   function replaceCharacters(n) {
    $('#displayWord li').eq(n).text(lettersGuessed[0]);
   };
  
	

/*
display words as dashes
- get wordRandom
- count how many letters are in the string
- for loop of length of letters of word
- take that number and print that many dashes in the wordHolder
- append


*/



	function letterCounter (x) {
	  return x.replace(/[^a-zA-Z]/g, '').length;
	}

    for (var i = 0; i < letterCounter(wordRandom); i++) {
      
      console.log(wordRandom);

      wordHolder = document.getElementById('currentWord');
      correct = document.createElement('ul');

      for (var i = 0; i < wordRandom.length; i++) {
      correct.setAttribute('id', 'displayWord');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');

      if (wordRandom[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      lettersGuessed.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }

   


  }
	

/*

// Number of Remaining Guesses/Wins;

guessed = 10;
winCounter = 0;

/* -Run function to display # of guesses remaining
-if number is becomes <1 write "Game Over" in html 
"game-content" container */

function gameOver() {
    guessesRemaining.innerHTML = guessed + "guessed";
    if (guessed < 1) {
      guessesRemaining.innerHTML = "Game Over";
    }

// Create for loop to increment the # of wins after the full number of spaces in the word have been guessed
    for (var i = 0; i < storeGuess.length; i++) {
      if (winCounter + spaces === storeGuess.length) {
        guessesRemaining.innerHTML = "You Win!";
      }
    }
  }


/* After user wins or loses "reset" word by pushing next word randomized in string. 
Find way to not pick word twice until all randomized words have run through the string */
/*function newGame() {
    $("#win").text("");
    var options = new Array();
    var random = 1 + Math.floor(Math.random());
    hangman(options[random]);
}

$(document).ready(function () {
    $('#but').click(newGame);
});
*/
};