$(document).ready(function() {

	//Variables

	var emeraldValue, diamondValue, garnetValue, sapphireValue;
	var wins = 0;
	var losses = 0;
	var randomNumber;
	var countScore;

	//Functions

	function initializeVariables() {
		randomNumber = 19 + Math.floor(Math.random() * 102);
		emeraldValue = 1 + Math.floor(Math.random() * 12);
		diamondValue = 1 + Math.floor(Math.random() * 12);
		garnetValue = 1 + Math.floor(Math.random() * 12);
		sapphireValue = 1 + Math.floor(Math.random() * 12);
		countScore = 0;

		$("#win-counter").html("Wins: " + wins);
		$("#loss-counter").html("Losses: " + losses);
		$("#randomnumber").html(randomNumber);
		$("#currentscorecount").html(countScore);
		consoleLogVariables();
	}

	function hasUserWonOrLost() {
		if (countScore > randomNumber) {
			losses++;
			console.log("user lost");
			initializeVariables();
		}

		if (countScore == randomNumber) {
			wins++;
			console.log("user won");
			initializeVariables();
		}
	}

	initializeVariables();

	$(".gem").on("click", function() {
		var pressed = $(this).attr("value");
        console.log(pressed);
        if (pressed == "emerald") {
        	countScore += emeraldValue;
        } else if (pressed == "diamond") {
        	countScore += diamondValue;
        } else if (pressed == "garnet") {
        	countScore += garnetValue;
        } else if (pressed == "sapphire") {
        	countScore += sapphireValue;
        } else {
        	console.log("error");
        }
        $("#currentscorecount").html(countScore);
        consoleLogVariables();
        hasUserWonOrLost();
	});

});