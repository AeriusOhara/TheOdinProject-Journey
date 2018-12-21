var ROCK = 0;
var PAPER = 1;
var SCISSORS = 2;
var scorePlayer = 0;
var scoreComp = 0;
var movesReached = 0;

function toggleGameState(resetBoard){
	// Reset the scores
	scorePlayer = 0;
	scoreComp = 0;
	movesReached = 0;

	// Check whether we want to reset the entire board or not
	// a case where we don't want it is when we just won and
	// we invoke this function to toggle the player buttons
	if(resetBoard == true){
		changeMessage(0, "Your current score is 0.");
		changeMessage(1, "The computer's current score is 0.");

		// Use a for loop to reset all the rows&columns back to
		// their original state
		for(var i = 1; i <= 4; i++){
			for(var j = 1; j <= 3; j++){
				document.getElementById("col_" + i + "_" + j).className = "";
				document.getElementById("col_" + i + "_" + j).classList.add("col");
			}
		}
	}

	// Toggle the Start/Reset Game button
	var toggleGameStateBtn = document.getElementById("toggleGameState");
	toggleGameStateBtn.disabled = !toggleGameStateBtn.disabled;


	togglePlayerMoves();
}

function doCompMove() {
	// Generate a random number between 0 and 2
	var randNum = Math.floor((Math.random() * 3) + 0);

	return randNum;
};

function doPlayerMove(playerMove){
	// Stops the player from spamming the buttons before
	// the code has been processed
	togglePlayerMoves();

	// Process computer move by generating a random number
	// between 0 and 2; 0-rock, 1-paper, 2-scissors
	var compMove = doCompMove();
	var compMoveString = "";
	var playerMoveString = "";

	// Now compare the two moves and decide whether we have won or lost.
	var condition = "";
	if(compMove == ROCK){
		compMoveString = "rock";

		if(playerMove == PAPER){
			// Check win condition first
			playerMoveString = "paper";
			condition = "win";

			// Increment the score for the player
			scorePlayer++;
		}
		else if(playerMove == SCISSORS){
			// Check lose condition next
			playerMoveString = "scissors";
			condition = "lose";

			// Increment the score for the computer
			scoreComp++;
		}
		else{
			// We played a tie! No score for either side
			playerMoveString = "rock";
			condition = "tie"
		}
	}
	else if(compMove == PAPER){
		compMoveString = "paper";

		if(playerMove == SCISSORS){
			// Check win condition first
			playerMoveString = "scissors";
			condition = "win";

			// Increment the score for the player
			scorePlayer++;
		}
		else if(playerMove == ROCK){
			// Check lose condition last
			playerMoveString = "rock";
			condition = "lose";

			// Increment the score for the computer
			scoreComp++;
		}
		else{
			// We played a tie! No score for either side
			playerMoveString = "paper";
			condition = "tie";
		}
	}
	else if(compMove == SCISSORS){
		compMoveString = "scissors";

		if(playerMove == ROCK){
			// Check win condition first
			playerMoveString = "rock";
			condition = "win";

			// Increment the score for the player
			scorePlayer++;
		}
		else if(playerMove == PAPER){
			// Check lose condition next
			playerMoveString = "paper";
			condition = "lose";

			// Increment the score for the computer
			scoreComp++;
		}
		else{
			// We played a tie! No score for either side
			playerMoveString = "scissors";
			condition = "tie";
		}
	}

	// Process the moves made by the player and computer
	processCondition(condition, playerMoveString, compMoveString);

	// Re-enable the buttons
	togglePlayerMoves();
};

function processCondition(condition, playerMoveString, compMoveString){
	if(movesReached > 0){
		// Move the moves over to the next row,
		// replacing each next one with the
		// previous one until we overwrite the
		// first entry
		for(var i = movesReached; i > 0; i--){
			//alert("col_" + (i + 1) + "_1 = " + "col_" + i + "_1");
			document.getElementById("col_" + (i + 1) + "_1").className = document.getElementById("col_" + i + "_1").className;
			document.getElementById("col_" + (i + 1) + "_2").className = document.getElementById("col_" + i + "_2").className;
			document.getElementById("col_" + (i + 1) + "_3").className = document.getElementById("col_" + i + "_3").className;
		}
	}

	// Insert the result of the current turn
	document.getElementById("col_1_1").className = "";
	document.getElementById("col_1_1").classList.add(condition);
	document.getElementById("col_1_1").classList.add(playerMoveString);

	document.getElementById("col_1_2").className = "";
	document.getElementById("col_1_2").classList.add(condition);
	document.getElementById("col_1_2").classList.add("scissor");

	document.getElementById("col_1_3").className = "";
	document.getElementById("col_1_3").classList.add(condition);
	document.getElementById("col_1_3").classList.add(compMoveString);
	document.getElementById("col_1_3").classList.add("flipped");

	// Update the rendered score values for the player and computer
	changeMessage(0, "Your current score is " + scorePlayer + ".");
	changeMessage(1, "The computer's current score is " + scoreComp + ".");

	// Check if either side has 3 points or more, if yes, the game is over!
	if(scorePlayer >= 3){
		// The player has won
		changeMessage(0, "You have won, congratulations!");
		changeMessage(1, "---");
		toggleGameState();
	}
	else if(scoreComp >= 3){
		// The computer has won
		changeMessage(1, "You have lost, too bad!");
		changeMessage(0, "---");
		toggleGameState();
	}

	// If we have reached the max moves we log in The
	// window, stop incrementing it. We use this variable
	// to let the code know how many classes to move
	// down in order to insert the new one
	if(movesReached < 3){
		movesReached++;
	}
};

function changeMessage(type, message){
	// Type: 0 = player, 1 = computer
	if(type == 0){
		// Change the message for the player
		var typeStr = "scorePlayer";
	}
	else{
		// Change the message for the computer
		var typeStr = "scoreComp";
	}

	document.getElementById(typeStr).innerHTML = message;
}

function togglePlayerMoves(choice){
	// Invert the buttons' disable value
	var rockBtn = document.getElementById("rockButton");
	rockBtn.disabled = !rockBtn.disabled;

	var paperBtn = document.getElementById("paperButton");
	paperBtn.disabled = !paperBtn.disabled;

	var scissorsBtn = document.getElementById("scissorsButton");
	scissorsBtn.disabled = !scissorsBtn.disabled;
}






















function runExpression(){
	var string = document.getElementById("mathExpression").value;
	var expression = eval(string);
	document.getElementById("mathExpressionOutput").value = expression;
};
