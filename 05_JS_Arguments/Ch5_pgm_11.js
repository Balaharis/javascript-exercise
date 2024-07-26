// Displaying a player's location

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[3] + " is in " + playerPlace);
};

showPlayerPlace("Jeevitha", "The  Doom");
showPlayerPlace("Dhana", "The new Library");



/* Further Adventures
 *
 * 1) Inside the console.log brackets,
 *    change playerName to playerName[0]
 *    Run the program.
 *    What effect do the brackets have?
 *
 * 2) Change the number in the brackets to 1.
 *
 * 3) What happens when you change the
 *    number to 3? Why?
 *
 */

// K is in The Doom
// D is in The new Library
// a is in The Dungeon of Doom
// a is in The new Library
// d is in The Doom
// undefined is in The Old Library , because dax has index of 0,1,2