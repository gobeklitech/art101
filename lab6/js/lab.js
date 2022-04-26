// Author: Teddy Hayden

// Date Created: 4/25/22

var myTransport = ["Beach Cruiser","Skateboard","Cool Van"];

var myMainRide = {
    make: "GMC",
    model: "Safari",
    color: "Silver / Red"};

document.writeln("My Transport Options:" + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

