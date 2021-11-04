/*
Author: Alexa Marquez
Created: 11.01.2021
Licensed: Public Domain
*/

function sortUserName() {
  var userName = document.getElementById('user-name')
  var name = userName.value;
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

var x = document.getElementById("my-button");
x.onclick = function(){sortUserName};
x.addEventListener("click", sortString);
console.log("innner html", button.innerHTML);
