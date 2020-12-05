import Card from '../Card'
import EndOfRoundData from './EndOfRoundReportData'
import IRoundState from './IRoundState'
import Round from './Round'
import Trick from '../Trick'
import TrickState from './TrickState'

class FindingPickerState implements IRoundState {
  private round: Round

  constructor(round: Round) {
    this.round = round
  }

  public pass(): void {
    if (this.round.getIndexOfDealer() === this.round.getIndexOfCurrentTurn()) {
      this.round.reDeal()
    } else {
      this.round.nextTurn()
    }
  }

  public bury(cardA: Card, cardB: Card): void {
    this.round.setBury([cardA, cardB])
    this.round.setCurrentTrick(new Trick())
    this.round.setContext(new TrickState(this.round))
  }

  public play(card: Card): void {
    throw new Error(`Cannot play "${card.getCardId()}" in FindingPickerState`)
  }

  public getEndOfRoundReport(): EndOfRoundData {
    throw new Error('Round not over in FindingPickerState')
  }
}

export default FindingPickerState
