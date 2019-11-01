'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  let player1 = hand1.toLowerCase().trim();
  let player2 = hand2.toLowerCase().trim();

  // Write code here
  if (player1 === player2) {
    return "It's a tie!";
  } 
  if (player1 === 'rock' && player2 === 'paper') {
    return "Hand two wins!"
  } else if (player1 === 'paper' && player2 === 'scissors') {
    return "Hand two wins!"
  } else if (player1 === 'rock' && player2 === 'scissors') {
    return "Hand one wins!"
  } else if (player1 === 'paper' && player2 === 'rock') {
    return "Hand one wins!"
  } else if (player1 === 'scissors' && player2 === 'rock') {
    return "Hand two wins!"
  } else if (player1 === 'scissors' && player2 === 'paper') {
    return "Hand one wins!"
  } else if (player1 === 'rOcK' && player2 === ' paper ') {
    return "Hand two wins!"
  } else if (player1 === 'Paper' && player2 === 'SCISSORS') {
    return "Hand two wins!"
  } else if (player1 === 'rock ' && player2 === 'sCiSsOrs') {
    return "Hand one wins!"
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");

      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
