import Card from '../Card'
import Suit from '../Suit'

describe('Card', () => {
  it('Should get the correct suit when constructed', () => {
    expect(new Card('qc').getSuit()).toBe(Suit.TRUMP)
    expect(new Card('9c').getSuit()).toBe(Suit.CLUB)
    expect(new Card('9s').getSuit()).toBe(Suit.SPADE)
    expect(new Card('9h').getSuit()).toBe(Suit.HEART)
  })
})
