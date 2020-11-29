import ICardRanker from './ICardRanker'
import Suit from './Suit'

interface CardConfig {
  rank: number
  pointValue: number
  suit: Suit
}

const cardIdToCardConfig: Map<string, CardConfig> = new Map()
cardIdToCardConfig.set('qc', { rank: 1, pointValue: 3, suit: Suit.TRUMP })
cardIdToCardConfig.set('7d', { rank: 2, pointValue: 0, suit: Suit.TRUMP })
cardIdToCardConfig.set('qs', { rank: 3, pointValue: 3, suit: Suit.TRUMP })
cardIdToCardConfig.set('qh', { rank: 4, pointValue: 3, suit: Suit.TRUMP })
cardIdToCardConfig.set('qd', { rank: 5, pointValue: 3, suit: Suit.TRUMP })
cardIdToCardConfig.set('jc', { rank: 6, pointValue: 2, suit: Suit.TRUMP })
cardIdToCardConfig.set('js', { rank: 7, pointValue: 2, suit: Suit.TRUMP })
cardIdToCardConfig.set('jh', { rank: 8, pointValue: 2, suit: Suit.TRUMP })
cardIdToCardConfig.set('jd', { rank: 9, pointValue: 2, suit: Suit.TRUMP })
cardIdToCardConfig.set('ad', { rank: 10, pointValue: 11, suit: Suit.TRUMP })
cardIdToCardConfig.set('td', { rank: 11, pointValue: 10, suit: Suit.TRUMP })
cardIdToCardConfig.set('kd', { rank: 12, pointValue: 4, suit: Suit.TRUMP })
cardIdToCardConfig.set('9d', { rank: 13, pointValue: 0, suit: Suit.TRUMP })
cardIdToCardConfig.set('8d', { rank: 14, pointValue: 0, suit: Suit.TRUMP })
cardIdToCardConfig.set('ac', { rank: 15, pointValue: 11, suit: Suit.CLUB })
cardIdToCardConfig.set('as', { rank: 16, pointValue: 11, suit: Suit.SPADE })
cardIdToCardConfig.set('ah', { rank: 17, pointValue: 11, suit: Suit.HEART })
cardIdToCardConfig.set('tc', { rank: 18, pointValue: 10, suit: Suit.CLUB })
cardIdToCardConfig.set('ts', { rank: 19, pointValue: 10, suit: Suit.SPADE })
cardIdToCardConfig.set('th', { rank: 20, pointValue: 10, suit: Suit.HEART })
cardIdToCardConfig.set('kc', { rank: 21, pointValue: 4, suit: Suit.CLUB })
cardIdToCardConfig.set('ks', { rank: 22, pointValue: 4, suit: Suit.SPADE })
cardIdToCardConfig.set('kh', { rank: 23, pointValue: 4, suit: Suit.HEART })
cardIdToCardConfig.set('9c', { rank: 24, pointValue: 0, suit: Suit.CLUB })
cardIdToCardConfig.set('9s', { rank: 25, pointValue: 0, suit: Suit.SPADE })
cardIdToCardConfig.set('9h', { rank: 26, pointValue: 0, suit: Suit.HEART })

class BellePlaineRulesCardRanker implements ICardRanker {
  public isValidCard(cardId: string): boolean {
    return cardIdToCardConfig.has(cardId)
  }
  public getRank(cardId: string): number {
    return cardIdToCardConfig.get(cardId).rank
  }
  public getPointValue(cardId: string): number {
    return cardIdToCardConfig.get(cardId).pointValue
  }
  public getSuit(cardId: string): Suit {
    return cardIdToCardConfig.get(cardId).suit
  }
}

export default BellePlaineRulesCardRanker
