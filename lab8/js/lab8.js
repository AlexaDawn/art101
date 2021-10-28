/*
Author: Alexa Marquez
Created: 10.25.2021
Licensed: Public Domain
*/

function isOdd(x){
  return (x % 2 == 1)
}

//testing function
console.log("Is 768743856278 odd?", isOdd(768743856278));
console.log("Is 4206969 odd?", isOdd(4206969));

array = [101, 66, 23, 2, 19, 6969]
console.log("My array", array);

var result = array.map(isOdd);
// expected[true, false, true, false, true, true]
console.log("Test of odd values in array:", result);

var result = array.map(function(x){
  return x ** 2;
})

// expected [10201, 4356, 529, 4, 361, 48566961]
console.log("Squared array:", result);

var outputEl = document.getElementById("output");
outputEl.innerHTML = array.map(isOdd);
// put your results here
