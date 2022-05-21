// Teddy Hayden 

// Monday, May 9th, 2022


let outputEl = document.getElementById("output");

let myButton = document.getElementById("my-button");

let myUsername= document.getElementById("user-name");


function sortName() {

	var userName = myUsername.value;

	var nameArray = userName.split("");

	var sortedName = nameArray.sort().join("");

	outputEl.innerHTML = sortedName;

} 


myButton.addEventListener("click",sortName);
