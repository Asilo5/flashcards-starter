const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe ('Game', () => {
  it('should be a function', () => {
    const game = new Game();
    expect(Game).to.be.a('function');
  })

  it.only('should create cards', () => {
    const game = new Game();
    expect(game.printMessage()).to.equal();
  })

})

