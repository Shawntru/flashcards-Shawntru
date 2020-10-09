const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', () => {
    expect(Game).to.be.a('function');
  });

  it('should keep track of the current round', () => {
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should be able to start an new game', () => {
    expect(game.start).to.be.a('function');
  });

});
