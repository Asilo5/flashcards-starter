const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should return the guess', () => {
    const card = new Card({ id: 5, question: "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'iteration method'})
    const turn = new Turn('iteration method', card);
    expect(turn.returnGuess()).to.equal('iteration method');
  })

  it('should return the Card', () => {
    const card = new Card({ id: 5, question: "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'iteration method'})
    const turn = new Turn('iteration method', card);
    expect(turn.returnCard()).to.eql(card);
  })

  it.only('should return a boolean to state whether guess was correct or not', () => {
    const card = new Card({ id: 5, question: "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'iteration method'})
    const turn = new Turn('iteration method', card);
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it.only('should return either ‘incorrect!’ or ‘correct!’', () => {
    const card = new Card({ id: 5, question: "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", answers: ['mutator method', 'accessor method', 'iteration method'], correctAnswer: 'iteration method'})
    const turn = new Turn('iteration method', card);
    expect(turn.giveFeedback()).to.equal('correct!');
  })

});