import Card from '../Card'
import Hand from '../Hand'

describe('Hand', () => {
  describe('Get Playable Cards From Hand', () => {
    it('Should return only the trump cards if there the lead is a trump card and there are trump cards in the hand', () => {})
    it('Should return only the non trump cards of the same suit if any exist in the hand and the lead is a non trump', () => {})
    it('Should return all cards in the hand if there there is no matching suit in the hand to follow', () => {})
    it('Should return all cards in the hand if there there is no lead card passed in', () => {
      const hand = new Hand()
      hand.addCard(new Card('qc'))
    })
  })
})
