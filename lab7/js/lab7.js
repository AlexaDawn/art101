/*
Author: Alexa Marquez
Created: 10.25.2021

*/

function sortUserName() {
  var userName = window.prompt("hewwo! pwease tell me your name so I may sort it!");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the nameArray
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//Output
document.writeln("owo, I've fixed your name: ",
  sortUserName(), "</br>");
