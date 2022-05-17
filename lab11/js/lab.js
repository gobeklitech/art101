// Teddy Hayden

// Wednesday, May 11, 2022 


// Here we create buttons for Challenge, Problem, and results, and append them the the corresponding Bulma 'control' divs

$("#challenge").append('<button class = "button is-dark is-rounded" name = "challenge-button" id = "challenge-button">Challenge Button!</button>');

$("#problem").append('<button class = "button is-dark is-rounded" name = "problem-button" id = "problem-button">Problem Button!</button>');

$("#results").append('<button class = "button is-dark is-rounded" name = "results-button" id = "results-button">Results Button!</button>');

$("#results").append('<hr><button class = "button is-light is-rounded" name = "mystery-button" id = "mystery-button">Mystery Button..</button>');



$("#challenge-button").click(function(){

	$("#challenge-p").toggleClass("special");

});

$("#problem-button").click(function(){

	$("#problem-p").toggleClass("special-2");

});

$("#results-button").click(function(){

	$("#results-p").toggleClass("special-3");

});

$("#mystery-button").click(function(){

	$("#challenge-button").toggleClass("is-success");

	$("#problem-button").toggleClass("is-warning");

	$("#results-button").toggleClass("is-danger");

});