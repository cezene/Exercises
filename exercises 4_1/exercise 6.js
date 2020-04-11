/* Write a program that receives the name of a chess piece and returns the movements it makes.
As a challenge, make the program work both if you receive the name of a part with uppercase 
letters and with lowercase letters, without increasing the number of conditionals.
If the part passed is invalid, the program should return an error message.

Example: bishop -> diagonals */
let box = prompt("Please enter your piece").toLowerCase();
function chessMoves() {
    if(box === 'queen') {
        alert('Any direction on a straight or diagonal path');
    }
    if(box === 'king') {
        alert('Up, down, to the sides, and diagonally');
    }
    if(box === 'rook') {
        alert('Forward, backward, left or right at any time');
    }
    if(box === 'bishop') {
        alert('Any direction diagonally');
    }
    if(box === 'knight') {
        alert('Forward, backward, left or right two squares and must then move one square in either perpendicular direction');
    }
    if(box === 'pawn') {
        alert('Directly forward one square');
    }
    else {
        alert('Error')
    }
}   
console.log(chessMoves());
console.log("hello, world")