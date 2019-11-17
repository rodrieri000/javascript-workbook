'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  const lastBlock = stacks[startStack].pop()
  stacks[endStack].push(lastBlock)  
}

function isLegal(startStack, endStack) {
  // Your code here
  const startIndex = stacks[startStack].length - 1;
  const startVariable = stacks[startStack][startIndex];
  const endIndex = stacks[endStack].length - 1;
  const endVariable = stacks[endStack][endIndex];
  if (
    stacks[endStack].length === 0 ||
    startVariable < endVariable
  ) {
    return true;
  } else {
    return false
  }
}

function checkForWin() {
  // Your code here
  // If endStack === [4, 3, 2, 1] return true
  if (
    stacks.c.length === 4 || 
    stacks.b.length === 4
  ) {
    console.log('Win!')
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 1],
        b: [2],
        c: []
      };
      assert.equal(isLegal('b', 'a'), false);
    });
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 1],
        b: [],
        c: [2]
      };
      assert.equal(isLegal('c', 'a'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
