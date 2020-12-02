import Card from '../Card'
import EndOfRoundData from './EndOfRoundReportData'
import IRoundState from './IRoundState'
import Round from './Round'

class TrickState implements IRoundState {
  private round: Round
  constructor(round: Round) {
    this.round = round
  }

  pass(): void {
    throw new Error('Cannot pass in TrickState')
  }

  bury(cardA: Card, cardB: Card): void {
    throw new Error('Cannot bury in TrickState')
  }

  play(card: Card): void {
    // TODO add this card to the trick and assume that it came from the player whose turn it is
    // TODO check to see if the trick is over, if so, give the trick to the victor
    // TODO if players still have cards in their hands, go to the next TrickState
    // TODO if not, then go to the end of game state

    throw new Error('Method not implemented.')
  }

  getEndOfRoundReport(): EndOfRoundData {
    throw new Error('Round not over in TrickState')
  }
}

export default TrickState
