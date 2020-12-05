import Card from '../Card'
import EndOfRoundData from './EndOfRoundReportData'
import IRoundState from './IRoundState'
import Round from './Round'
import Trick from '../Trick'
import TrickState from './TrickState'

class PickerHasNotBuriedState implements IRoundState {
  private round: Round
  constructor(round: Round) {
    this.round = round
  }

  pass(): void {
    throw new Error('Cannot pass in PickerHasNotBuriedState')
  }

  pick(): void {
    throw new Error('Cannot pick in PickerHasNotBuriedState')
  }

  bury(cardA: Card, cardB: Card): void {
    this.round.setBury([cardA, cardB])
    this.round.setCurrentTrick(new Trick(1))
    this.round.setIndexOfCurrentTurn(this.round.getIndexOfNextPlayer(this.round.getIndexOfDealer()))
    this.round.setContext(new TrickState(this.round))
  }

  public play(card: Card): void {
    throw new Error(`Cannot play "${card.getCardId()}" in PickerHasNotBuriedState`)
  }

  public getEndOfRoundReport(): EndOfRoundData {
    throw new Error('Round not over in PickerHasNotBuriedState')
  }
}

export default PickerHasNotBuriedState
