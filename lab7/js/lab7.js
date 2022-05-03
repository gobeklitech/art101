// Author: Edward Hayden

// Date: 4/29/21

function main() {

	let userName = prompt("Please enter your name:");

	var nameArray = userName.split("");

	return nameArray.sort().join("");

} 

document.writeln(main());