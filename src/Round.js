const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turn = {};
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {


    this.turn = new Turn();
    this.currentCard = this.turn.card;
    this.turns ++;
  }
}

module.exports = Round;
