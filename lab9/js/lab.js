/*
Author: Alexa Marquez
Created: 11.01.2021
Licensed: Public Domain
*/

var outputEl = document.getElementById("output");
  outputEl.style.fontFamily = "Press Start 2P";
  outputEl.innerHTML = "Ca fait longtemps!";

var new1El = document.createElement("p");
  new1El.innerHTML = "Bonjour";


var new2El = document.createElement("p");
  new2El.innerHTML = "Ca va bien?";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
