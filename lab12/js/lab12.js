/*
Author: Alexa Marquez
Created: 11.01.2021
Licensed: Public Domain
*/

//Returns Hogwart House nammes Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
//based on mod 4 length
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Gryffindor!"
  }
  else if (mod == 1){
    return "Ravenclaw!"
  }
  else if (mod == 2){
    return "Slytherin!"
  }
  else if (mod == 3){
    return "Hufflepuff!"
  }
}

//gets user input from button, and returns the value given by the Sorting Hat function
var myButton = document.getElementById("button");
myButton.addEventListener("click",function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p> The Sorting Hat has spoken!" + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
