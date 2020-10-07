const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  let card1;
  let card2;
  let card3;
  let turn;
  let deck;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to hold a card', function(){
    expect(deck.cards[0]).to.deep.equal(card1);
  });

  it('should be able to hold multiple cards', function(){
    expect(deck.cards).to.have.lengthOf(3);
  });

  it('should be able to count how many cards are in the deck', function() {
    expect(deck.countCards()).to.deep.equal(3);
  })

})
