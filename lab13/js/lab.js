// Teddy Hayden 

// Wednesday, May 18th , 2022


let myButton = document.getElementById("button");

let mylength = document.getElementById("how-far");

function fizzBuzz(){

	for (let i = 1; i <= mylength.value; i++) { 

		threes  = i % 3;
		fives = i % 5;
		sevens = i % 7;
		elevens = i % 11;

		threesstr  = "";
		fivesstr = "";
		sevensstr = "";
		elevensstr = "";				


		if (!threes) {

			threesstr = "Fizz!";

		}

		if (!fives) {

			fivesstr = "Buzz!";

		}

		if (!sevens) {

			sevensstr = "Boom!"

		}

		if (!elevens) {

			elevensstr = "Bop!"

		}

		outstr = threesstr + fivesstr + sevensstr + elevensstr + "<br>";
		
		$("#output").append(i.toString() + ": " + outstr + "<hr>");

	}

}

myButton.addEventListener("click",fizzBuzz);

