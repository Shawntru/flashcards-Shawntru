const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turn = {};
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turn = new Turn(guess, this.currentCard);
    const result = this.turn.evaluateGuess();
    if (!result) this.incorrectGuesses.push(this.currentCard.id);
      else this.correctGuesses ++;
    const feedback = this.turn.giveFeedback();
    this.deck.cards.shift();
    this.currentCard = this.deck.cards[0];
    this.turns ++;
    return feedback;
  }

  calculatePercentCorrect() {
    const totalQuestions = this.incorrectGuesses.length + this.correctGuesses;
    const percentCorrect = Math.round((this.correctGuesses / totalQuestions) * 100);
    return percentCorrect;
  }

  endRound() {
    const percent = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${percent}% of the questions correctly!`;
  }
}

module.exports = Round;
