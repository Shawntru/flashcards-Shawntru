const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have the current card be the first card in the deck at the start of a round', () => {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should return the current card being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard);
  });

  it('should create a new turn when a guess is made', () => {
    let round1 = round.turn;
    round.takeTurn('pug');
    expect(round1).to.not.equal(round.turn);
  });

  it('should update the turn count when a turn is taken', () => {
    expect(round.turns).to.deep.equal(0);
    round.takeTurn();
    expect(round.turns).to.deep.equal(1);
  });

  it('should update the turn count independant of a correct/incorrect guess', () => {
    expect(round.turns).to.deep.equal(0);
    round.takeTurn('sea otter');
    round.takeTurn('pug');
    expect(round.turns).to.deep.equal(2);
  });

  it('should make the next card the current card', () => {
    let previousCard = round.currentCard;
    let nextCard = round.deck.cards[1];
    round.takeTurn();
    expect(round.currentCard).to.not.equal(previousCard);
    expect(round.currentCard).to.deep.equal(nextCard);
  });

  it('should evaluate guesses, and store the incorrect ones', () => {
    expect(round.incorrectGuesses).to.be.an('array').that.is.empty;
    let roundGuess = round.takeTurn('pug');
    expect(roundGuess).to.equal('incorrect!');
    expect(round.incorrectGuesses).to.be.an('array').that.includes(1);
  })

  it('should calculate and return the percentage of correct guesses', () => {
    round.takeTurn('sea otter');
    round.takeTurn('wrong guess');
    expect(round.calculatePercentCorrect()).to.deep.equal(50);
  });

  it('should be able to ifnrom the user of the percentage of correct answers', () => {
    round.takeTurn('sea otter');
    round.takeTurn('wrong guess');
    expect(round.endRound()).to.deep.equal('** Round over! ** You answered 50% of the questions correctly!')
  })

})
