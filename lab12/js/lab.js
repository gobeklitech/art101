// Teddy Hayden

// Monday the 12th of May, 2022


let outputEl = document.getElementById("output");

let myButton = document.getElementById("button");

let myUsername= document.getElementById("user-name");


function sortingHat() {

	var userName = myUsername.value;

	nameArray = userName.split("");

	length = nameArray.length;

	mod = length % 4;

	// Conditionals method

	// if (mod == 1) {
	// 	house = "Hufflepuff";
	// } else if (mod == 2) {
	// 	house = "Slytherin";
	// } else if (mod == 3) {
	// 	house = "Ravenclaw";
	// } else { 
	// 	house = "Gryffindor";
	// };

	// Refactoring method

	houses = ["Gryffindor","Ravenclaw","Slytherin","Hufflepuff"];

	house = houses[mod];
	
	outputEl.innerHTML = "The Sorting Hat has sorted you into " + house;

} 

myButton.addEventListener("click",sortingHat);