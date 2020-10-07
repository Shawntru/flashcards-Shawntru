const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have the current card be the first card in the deck at the start of a round', function() {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard);
  });

  it('should update the turn count when a turn is taken', function() {
    expect(round.turns).to.deep.equal(0);
    round.takeTurn();
    expect(round.turns).to.deep.equal(1);
  });

  it('should update the turn count independant of a correct/incorrect guess', function() {

  })

})
