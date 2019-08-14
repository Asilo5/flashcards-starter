const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

var card1;
var card2;
var card3;

var deck;
var round;

beforeEach(() => {
  card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
  card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
      
  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
})

describe('Round', () => {

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  })

  it('should return the current card being played', () => {
    expect(round.returnCurrentCard()).to.eql(card1);
  })

  it('should return the array of the deck', () => {
    expect(round.deck).to.eql(deck);
  })

  it('should return turns at 0', () => {
    expect(round.turns).to.equal(0);
  })

  it('should return an empty array in incorrectGuesses', () => {
    expect(round.incorrectGuesses).to.eql([]);
  })

  it('should return answer "correct" is guess is correct', () => {
    expect(round.takeTurn('sea otter')).to.eql('correct!');
  })

  it('should calculate percentage of correct guesses', () => {
    round.takeTurn('Fitzgerald');
    round.takeTurn('gallbladder');
    expect(round.calculatePercentCorrect()).to.equal(50);
  })

  it.only('should return output saying game is over and percentage of correct answers', () => {
    round.takeTurn('Fitzgerald');
    round.takeTurn('gallbladder');
    round.calculatePercentCorrect();
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly')
  })

});