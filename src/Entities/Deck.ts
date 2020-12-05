import seedrandom from 'seedrandom'
import Card from './Card'
import ICardRanker from './ICardRanker'

class Deck {
  private stackOfCards: Card[]
  private cardIds: string[]
  private cardRanker: ICardRanker

  constructor(cardRanker: ICardRanker) {
    this.cardRanker = cardRanker
    this.stackOfCards = []
    this.cardIds = []
  }

  public shuffle(shuffleSeed: number): void {
    this.cardIds = this.cardRanker.getAllCardIds()
    this.performFisherYatesShuffle(shuffleSeed)
    this.stackOfCards = this.cardIds.map(cardId => new Card(cardId, this.cardRanker))
  }

  private performFisherYatesShuffle(shuffleSeed: number) {
    const randomGenerator = seedrandom(shuffleSeed)
    for (let i = this.cardIds.length - 1; i > 0; i--) {
      const j = Math.floor(randomGenerator() * i)
      const temp = this.cardIds[i]
      this.cardIds[i] = this.cardIds[j]
      this.cardIds[j] = temp
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
