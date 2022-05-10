// Author: Teddy Hayden

// Date: 5.4.22

//

let outputEl = document.getElementById("output");

let new1El = document.createElement("p");

new1El.innerHTML = "Something New, that I am typing in JS!";

let new2El = document.createElement("p");

let new3El = document.createElement("p");

let myHR = document.createElement("hr");

let myHR1 = document.createElement("hr");

let myHR2 = document.createElement("hr");

let myURL = document.URL;

console.log(myURL)

new2El.innerHTML = "Something Else, also typed in JS. This should appear below my Something New, separated by a horizontal line.";

new3El.innerHTML = "An additional thing I am trying to append to the <strong>top</strong> of my div using the <code>.prepend()</code> method. If this is at the top, I have succeeded!";

outputEl.appendChild(myHR1);

outputEl.appendChild(new1El);

outputEl.appendChild(myHR);

outputEl.appendChild(new2El);

outputEl.prepend(new3El);

outputEl.appendChild(myHR2);

//outputEl.appendChild(myURL);

