const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard);
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);  
      console.log(this.)
    }
  }
}

module.exports = Round;