
// Take the contents of the sonnet div and place it in a variable
var theSonnet = document.getElementById("sonnet").innerHTML;
//console.log(theSonnet);

// Find and output the starting position of the word "orphans"

var orphansPosition = theSonnet.indexOf("orphans");
//console.log(orphansPosition);

// Output the number of characters in the sonnet
var numberOfCharacter = theSonnet.length;
//console.log(numberOfCharacter);

// Replace the first occurance of the string "winter" with "yuletide"

var replaceWinter = theSonnet.replace("winter", "yuletide");
//console.log(replaceWinter);

// Replace all occurances of the string "the" with "a large"
var replaceLarge = replaceWinter.replace(/ the | The |The  /gi, " a large ");
//console.log(replaceLarge);

// Set the content of the sonnet div with the new string

var newSonnet = document.getElementById("sonnet");
newSonnet.innerHTML = replaceLarge;

