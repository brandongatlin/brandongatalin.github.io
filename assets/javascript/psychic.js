//create array of letter choices and answers
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	console.log(letters[5]);

// counter variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var playerGuesses = [];
var computerGuess = "";

	console.log(guessesLeft);

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

	console.log(computerGuess);

var updateGuessesLeft = function() {
    document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateComputerGuess = function() {
    this.computerGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var updateGuessesSoFar = function() {
    document.querySelector("#playerGuesses").innerHTML = playerGuesses.join(', ');
};

//set all to default
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    playerGuesses = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    updateComputerGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}



//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

    playerGuesses.push(playerGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (guessesLeft > 0) {
        if (playerGuess === computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            reset();
        }
    }

    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        reset();
    }
};

//start canvas drawings


// canvas drawing variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



// draw setup

// draw ground

ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "1";
ctx.strokeRect(25, 180, 200, 1);

// draw gallows pole

ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "1";
ctx.strokeRect(35, 25, 1, 155);


// draw hanging pole
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "1";
ctx.strokeRect(25, 25, 100, 1);

// draw brace
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(35, 50);
ctx.lineTo(60, 25);
ctx.stroke();

// draw noose
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 25);
ctx.lineTo(110, 45);
ctx.stroke();

// draw man

// draw head

ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.arc(110, 60, 15, 0, Math.PI*2, false);
ctx.stroke();


// draw torso
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 75);
ctx.lineTo(110, 125);
ctx.stroke();

// draw his right arm
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 80);
ctx.lineTo(80, 100);
ctx.stroke();

// draw his left arm
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 80);
ctx.lineTo(140, 100);
ctx.stroke();

// draw his right leg
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 125);
ctx.lineTo(90, 160);
ctx.stroke();

// draw his left leg
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 125);
ctx.lineTo(130, 160);
ctx.stroke();

// draw sad face
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.arc(110, 70, 5, 0, Math.PI, true);
ctx.stroke();

// draw x eyes
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "1";
ctx.beginPath();
ctx.moveTo(112, 52);
ctx.lineTo(117, 57);
ctx.moveTo(112, 57);
ctx.lineTo(117, 52);
ctx.moveTo(102, 52);
ctx.lineTo(107, 57);
ctx.moveTo(102, 57);
ctx.lineTo(107, 52);
ctx.stroke();

