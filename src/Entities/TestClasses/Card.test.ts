import BellePlaineRulesCardRanker from '~Entities/BellePlaineRulesCardRanker'
import Card from '../Card'
import Suit from '../Suit'

describe('Card', () => {
  it('Should get the correct suit when constructed', () => {
    expect(new Card('qc', new BellePlaineRulesCardRanker()).getSuit()).toBe(Suit.CLUB)
    expect(new Card('9c', new BellePlaineRulesCardRanker()).getSuit()).toBe(Suit.CLUB)
    expect(new Card('9s', new BellePlaineRulesCardRanker()).getSuit()).toBe(Suit.SPADE)
    expect(new Card('9h', new BellePlaineRulesCardRanker()).getSuit()).toBe(Suit.HEART)
  })
})
