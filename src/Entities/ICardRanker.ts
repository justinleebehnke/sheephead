import Suit from './Suit'

interface ICardRanker {
  isValidCard(cardId: string): boolean
  getRank(cardId: string): number
  getPointValue(cardId: string): number
  getSuit(cardId: string): Suit
}

export default ICardRanker
