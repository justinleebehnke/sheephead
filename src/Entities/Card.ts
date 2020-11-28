import { assert } from 'console'
import Suit from './Suit'

const validCardIds: Set<string> = new Set()
validCardIds.add('qc')
validCardIds.add('qs')
validCardIds.add('qh')
validCardIds.add('qd')

validCardIds.add('jc')
validCardIds.add('js')
validCardIds.add('jh')
validCardIds.add('jd')

validCardIds.add('ac')
validCardIds.add('as')
validCardIds.add('ah')
validCardIds.add('ad')

validCardIds.add('tc')
validCardIds.add('ts')
validCardIds.add('th')
validCardIds.add('td')

validCardIds.add('kc')
validCardIds.add('ks')
validCardIds.add('kh')
validCardIds.add('kd')

validCardIds.add('9c')
validCardIds.add('9s')
validCardIds.add('9h')
validCardIds.add('9d')

validCardIds.add('8d')
validCardIds.add('7d')

assert(validCardIds.size === 26)

const trumpCards: Set<string> = new Set()
trumpCards.add('qc')
trumpCards.add('qs')
trumpCards.add('qh')
trumpCards.add('qd')

trumpCards.add('jc')
trumpCards.add('js')
trumpCards.add('jh')
trumpCards.add('jd')

trumpCards.add('ad')
trumpCards.add('td')
trumpCards.add('kd')
trumpCards.add('9d')
trumpCards.add('8d')
trumpCards.add('7d')

assert(trumpCards.size === 14)

class Card {
  private cardId: string
  private suit: Suit
  private rank: number

  constructor(cardId: string) {
    if (this.isValidCardId(cardId)) {
      this.cardId = cardId
      if (this.isTrumpCard(cardId)) {
        this.suit = Suit.TRUMP
      } else {
        const chars = cardId.split('')
        switch (chars[1]) {
          case 's':
            this.suit = Suit.SPADE
            break
          case 'h':
            this.suit = Suit.HEART
            break
          case 'c':
            this.suit = Suit.CLUB
            break
          default:
            throw Error(`The suit: "${chars[1]}" is not recognized`)
        }
      }
    } else {
      throw Error(`Invalid Card Id: ${cardId}`)
    }
  }

  private isTrumpCard(cardId: string): boolean {
    return trumpCards.has(cardId)
  }

  private isValidCardId(cardId: string) {
    return validCardIds.has(cardId)
  }

  public getCardId(): string {
    return this.cardId
  }

  public getRank(): number {
    return this.rank
  }

  public getSuit(): Suit {
    return this.suit
  }

  public getPointValue(): number {
    console.log('card get point value not implemented')
    return 1
  }
}

export default Card
