// Finding a character with indexOf

var message = "We choose to go to the Jupiter!";

var charIndex = message.indexOf("J");

console.log(message.substr(charIndex, 3));

var message = "We choose to go to the Jupiter!";
var goIndex = message.indexOf("go");
console.log("The word 'go' starts at index " + goIndex);

var message = "We choose to go to the Jupiter!";
var chooseIndex = message.indexOf("choose");
console.log(message.substr(chooseIndex, 6));

var message = "We choose to go to the Jupiter!";
var JupiterIndex = message.indexOf("Jupiter");
var ooIndex = message.lastIndexOf("oo", JupiterIndex + 4);
console.log("The 'oo' in 'Jupiter' is at index " + ooIndex); 

/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */