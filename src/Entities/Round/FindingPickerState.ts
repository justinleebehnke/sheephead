import Card from '../Card'
import EndOfRoundData from './EndOfRoundReportData'
import IRoundState from './IRoundState'
import Round from './Round'

class FindingPickerState implements IRoundState {
  private round: Round
  constructor(round: Round) {
    this.round = round
  }

  pass(): void {
    if (this.round.getIndexOfDealer() === this.round.getIndexOfCurrentTurn()) {
      this.round.reDeal()
    } else {
      this.round.nextTurn()
    }
  }

  bury(cardA: Card, cardB: Card): void {
    this.round.setBury([cardA, cardB])
    this.round.setContext(new TrickState())
  }

  play(card: Card): void {
    throw new Error('Cannot play in FindingPickerState')
  }

  getEndOfRoundReport(): EndOfRoundData {
    throw new Error('Round not over in FindingPickerState')
  }
}

export default FindingPickerState
