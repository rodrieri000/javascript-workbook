1. Get current start stack and end stack values (eiether through eiser input or test) inside the towers of hanoi function
-Pass those values to isLegal function
-Pass those values to movePiece function

2. Check if piece is allowed to move
-use the startstack and endstack values inside of the isLegal function based off the rules of the game
  -startStack and endStack should be different letters
  -access the numbers inside the array of each key to the startStack and endStack values (a b,c)
  -bigger number cannot be placed on top of smaller function
    -any number can be placed onto an empty stack (array inside the stacks object)
-Extra pnts: return error message telling the user if their input is invalid (should be a, b, c)

3. Move a piece from one stack to another
-Update the stacks object inside of the movePiece function using the startStack and endStack values
-take the value from the end of the startStack array and add to the end of the endStack array (pop, shift, etc.)

4. Check to see if the game has won (checkForWin)
-when all the blocks are stacked into column 1 or 2 return true otherwise false
-Extra pnts: console log a winning message