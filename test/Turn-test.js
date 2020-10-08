const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should contain a users quess', () => {
    expect(turn.guess).to.deep.equal('object');
  });

  it('should contain the card being referenced', () => {
    expect(turn.card).to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: [ 'object', 'array', 'function' ],
      correctAnswer: 'object'
    });
  });

  it('should be able to return the users guess', () => {
    expect(turn.returnGuess()).to.deep.equal('object');
  });

  it('should be able to return the current card', () => {
    expect(turn.returnCard()).to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: [ 'object', 'array', 'function' ],
      correctAnswer: 'object'
    });
  });

  it('should be able to evaluate the guess and return a true of false value', () => {
    expect(turn.evaluateGuess()).to.deep.equal(true);
    turn.guess = 'array';
    expect(turn.evaluateGuess()).to.deep.equal(false);
  });

  it('should give feedback based on the guess', () => {
    expect(turn.giveFeedback()).to.deep.equal('correct!');
    turn.guess = 'array';
    expect(turn.giveFeedback()).to.deep.equal('incorrect!');
  });

});
