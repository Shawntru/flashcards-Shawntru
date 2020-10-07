class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0];
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {

    this.turns ++;
  }
}

module.exports = Round;
