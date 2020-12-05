import Card from '../Card'
import BellePlaineRulesCardRanker from '../BellePlaineRulesCardRanker'
import Player from '../Player'
import Round from '../Round/Round'
import UniqueIdentifier from '../../Utilities/UniqueIdentifier'

describe('Round', () => {
  it('Should be able to play a round all the way through', () => {
    const cardRanker = new BellePlaineRulesCardRanker()
    const player1Id = new UniqueIdentifier()
    const player1 = new Player('Jesse', player1Id)

    const player2Id = new UniqueIdentifier()
    const player2 = new Player('John', player2Id)

    const player3Id = new UniqueIdentifier()
    const player3 = new Player('Jake', player3Id)

    const player4Id = new UniqueIdentifier()
    const player4 = new Player('Carly', player4Id)

    const round = new Round(
      [player1, player2, player3, player4],
      0,
      123456789,
      new BellePlaineRulesCardRanker()
    )

    expect(player1.getPlayableCardIds()).toEqual(['7d', 'qh', '9d', '8d', 'kc', '9s'])
    expect(player2.getPlayableCardIds()).toEqual(['qd', 'td', 'kd', 'ah', 'tc', '9c'])
    expect(player3.getPlayableCardIds()).toEqual(['qs', 'jc', 'js', 'jd', 'ad', '9h'])
    expect(player4.getPlayableCardIds()).toEqual(['qc', 'ac', 'as', 'ts', 'th', 'kh'])

    expect(round.getBlind().length).toBe(2)
    expect(round.getBury().length).toBe(0)

    expect(round.getCurrentTurnPlayer()).toBe(player2)
    expect(() => round.play(new Card('qc', cardRanker))).toThrow(
      'Cannot play "qc" in FindingPickerState'
    )
    round.pass()
    expect(round.getCurrentTurnPlayer()).toBe(player3)

    expect(round.getPicker()).toBe(null)
    round.pick()
    expect(round.getPicker()).toBe(player3)

    expect(round.getBlind().length).toBe(0)
    expect(player3.getPlayableCardIds()).toEqual(['qs', 'jc', 'js', 'jh', 'jd', 'ad', 'ks', '9h'])
    expect(() => round.play(new Card('qc', cardRanker))).toThrow(
      'Cannot play "qc" in PickerHasNotBuriedState'
    )
    expect(round.getCurrentTurnPlayer()).toBe(player3)

    round.bury(player3.removeCardFromHand('ad'), player3.removeCardFromHand('ks'))
    expect(player3.getPlayableCardIds()).toEqual(['qs', 'jc', 'js', 'jh', 'jd', '9h'])

    expect(round.getBlind().length).toBe(0)
    expect(round.getBury().some(card => card.getCardId() === 'ad')).toBeTruthy()
    expect(round.getBury().some(card => card.getCardId() === 'ks')).toBeTruthy()
    expect(round.getBury().length).toBe(2)

    expect(() => round.pass()).toThrow('Cannot pass in TrickState')

    expect(round.getCurrentTurnPlayer()).toBe(player2)
    expect(round.getCurrentTurnPlayer().getPlayableCardIds().length).toBe(6)

    const round1LeadCard = player2.removeCardFromHand('qd')
    expect(player2.getPlayableCardIds()).toEqual(['td', 'kd', 'ah', 'tc', '9c'])
    round.play(round1LeadCard)
    expect(round.getCurrentTrick().getNumCardsPlayed()).toBe(1)
    expect(round.getCurrentTurnPlayer()).toBe(player3)
    expect(player3.getPlayableCardIds(round1LeadCard)).toEqual(['qs', 'jc', 'js', 'jh', 'jd'])
    round.play(player3.removeCardFromHand('jd'))

    expect(round.getCurrentTrick().getNumCardsPlayed()).toBe(2)
    expect(round.getCurrentTurnPlayer()).toBe(player4)
    expect(player4.getPlayableCardIds(round1LeadCard)).toEqual(['qc'])
    round.play(player4.removeCardFromHand('qc'))

    expect(round.getCurrentTrick().getNumCardsPlayed()).toBe(3)
    expect(round.getCurrentTurnPlayer()).toBe(player1)
    expect(player1.getPlayableCardIds(round1LeadCard)).toEqual(['7d', 'qh', '9d', '8d'])
    round.play(player1.removeCardFromHand('8d'))

    expect(player1.getTricksWon().length).toBe(0)
    expect(player2.getTricksWon().length).toBe(0)
    expect(player3.getTricksWon().length).toBe(0)
    expect(player4.getTricksWon().length).toBe(1)

    expect(round.getCurrentTrick().getNumCardsPlayed()).toBe(0)
  })
})
