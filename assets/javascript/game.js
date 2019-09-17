$(document).ready(function() {
    // set variables for number to much,totalscore,wins,loses//
    // set variables for each crystals//
	var NUMBERTOMATCH;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystal1Val;
	var crystal2Val;
	var crystal3Val;
	var crystal4Val;
//write a fuction that produces ramdom number for each crystal- 
//-and the number to much with a specified ceiling//
	function newNumbers() {
		NUMBERTOMATCH = Math.ceil(Math.random() * 110);
		crystal1Val = Math.ceil(Math.random() * 15);
		crystal2Val = Math.ceil(Math.random() * 15);
		crystal3Val = Math.ceil(Math.random() * 15);
		crystal4Val = Math.ceil(Math.random() * 15);
	}
//replace each id with text value//
	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#NUMBERTOMATCH").text(NUMBERTOMATCH);
		$("#totalScore").text(totalScore);
		$("#crystal1").attr("data-crystalvalue", crystal1Val);
		$("#crystal2").attr("data-crystalvalue", crystal2Val);
		$("#crystal3").attr("data-crystalvalue", crystal3Val);
		$("#crystal4").attr("data-crystalvalue", crystal4Val);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

		
	}
//write function that adds a win or a loss//
	function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	newGame();

	$(".crystal").hover(function() {
		$(this).css({opacity: 0.5});
	},
	function() {
		$(this).css({opacity: 1});
	});

	// Function to add the crystal values together
	$(".crystal").on("click", function() {
		if (totalScore >= NUMBERTOMATCH) {
			return;
		}

		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === NUMBERTOMATCH) {
			youWin();
		} else if (totalScore > NUMBERTOMATCH) {
			youLose();
		}
	});

	$(".playbutton").on("click", function() {
		newGame();
	});

});