const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    let newDeck = new Deck(prototypeQuestions.map((card) => new Card(card)));
    // inside of the deck we are instantiating the new cards
    // we are storing each card inside the deck by instantiating them
    // so we have the deck of cards stored
    this.currentRound = new Round(newDeck, this);
    this.printMessage(newDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }


  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;