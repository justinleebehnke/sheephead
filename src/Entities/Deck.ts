import seedrandom from 'seedrandom'
import Card from './Card'
import ICardRanker from './ICardRanker'

class Deck {
  private stackOfCards: Card[]
  constructor(cardRanker: ICardRanker) {
    this.stackOfCards = cardRanker.getAllCardIds().map(cardId => new Card(cardId, cardRanker))
  }

  public shuffle(shuffleSeed: number): void {
    this.performFisherYatesShuffle(shuffleSeed)
  }

  private performFisherYatesShuffle(shuffleSeed: number) {
    for (let i = this.stackOfCards.length - 1; i > 0; i--) {
      const j = Math.floor(seedrandom(shuffleSeed) * i)
      const temp = this.stackOfCards[i]
      this.stackOfCards[i] = this.stackOfCards[j]
      this.stackOfCards[j] = temp
    }
  }

  public hasNextCard(): boolean {
    return this.stackOfCards.length > 0
  }

  public getNextCard(): Card {
    const nextCard = this.stackOfCards.pop()
    if (nextCard) {
      return nextCard
    }
    throw Error('Cannot get next card on empty deck')
  }
}

export default Deck
