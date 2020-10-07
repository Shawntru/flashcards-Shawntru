class Deck {
  constructor(cards) {
    this.cards = cards || [];
    this.deckSize = this.cards.length;
  }

  countCards() {
    return this.deckSize;
  }
}

module.exports = Deck;
