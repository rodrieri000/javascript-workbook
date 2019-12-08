'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  // Your code here
  constructor(color) {
    if (color === 'white') {      
      this.symbol = String.fromCharCode(0x125CB);
    } else if (color === 'black') {
      this.symbol = String.fromCharCode(0x125CF);
    }
  }
}

const whiteChecker = new Checker('white');
const blackChecker = new Checker('black');

class Board {
  constructor() {
    this.grid = [];
    this.checkers = [];
    this.selectCheckers("row", "column");
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }

  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  createCheckers() {

    let whitePosition = [[0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]]

    let blackPosition = [[5, 0], [5, 2], [5, 4], [5, 6],
    [6, 1], [6, 3], [6, 5], [6, 7],
    [7, 0], [7, 2], [7, 4], [7, 6]]

    // In a for loop, iterate over the range from 0 - 11, with each index you want to
    let i;
    for (i = 0; i < 12; i++) {
  
      const whiteCord = whitePosition[i] 
      // assigning coordinates of whitePosition on board
      const whiteRow = whiteCord[0]
      // assigning row
      const whiteCol = whiteCord[1]
      // assigning col
      this.grid[whiteRow][whiteCol] = whiteChecker

      const blackCord = blackPosition[i]
      // assigning coordinates of blackPostion on board
      const blackRow = blackCord[0]
      // assigning row
      const blackCol = blackCord[1]
      // assinging col
      this.grid[blackRow][blackCol] = blackChecker
    }

    // Place that checker on the grid at the position corresponding with the index in the positions array

    // Push the checker into your this.checkers array

    // Do all three steps above for a 'black' checker

    // In your Game class, in the this.start method, add this.board.createCheckers().
  }

  selectCheckers() {


  }

  killCheckers() {

  }
  // Your code here
}

class Game {
  constructor() {
    this.board = new Board;
    // this.moveChecker("start", "end");
    // Next, in your Game class, create a this.moveChecker method that takes two parameters start, end. 
    // These two arguments will each contain a row and a column, eg. 50, 41. 
    // Inside the method, use your board helper method selectChecker to select the checker at your starting rowcolumncoordinates 
    // and set it to a local variable checker. 
    // Then set that spot on the grid to null and set the spot at the end rowcolumn coordinate to the checker.
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }
  // end(row, column) {

  // }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
