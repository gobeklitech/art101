// Author: Teddy Hayden

// Date: 5/2/2022

function Factorial(n) {
// Computes and returns n! 
    i = 1 ;
    product = 1 ; 

    while (i <= n) {  

        product = product*i ; 
        i++;

    }

    return product
}

var newArray = [1,5,11,20,31];

out1 = newArray.map(Factorial);

// computes (anonymously) x^3
out2 = newArray.map(function(x){
    return Math.pow(x,3)
});

function Nester(callback) { 

 return callback.map(Factorial);

}

// A callback as a function input

out3 = Nester(newArray.map(function(x){
    return Math.pow(x,3)
}))

console.log(out1);

console.log(out2);

console.log(out3);

//document.getElementById("output").innerHTML = out1

// var outputEl2 = document.getElementById("output"); 

// outputEl2.innerHTML = out2;











