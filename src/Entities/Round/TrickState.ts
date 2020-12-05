import Card from '../Card'
import EndOfRoundState from './EndOfRoundState'
import EndOfRoundData from './EndOfRoundReportData'
import IRoundState from './IRoundState'
import Round from './Round'
import Trick from '../Trick'

class TrickState implements IRoundState {
  private round: Round

  constructor(round: Round) {
    this.round = round
  }

  public pass(): void {
    throw new Error('Cannot pass in TrickState')
  }

  public bury(cardA: Card, cardB: Card): void {
    throw new Error(`Cannot bury "${cardA.getCardId()}" & "${cardB.getCardId()}" in TrickState`)
  }

  public play(card: Card): void {
    this.round.getCurrentTrick().addCardToTrick(card, this.round.getCurrentTurnPlayer())
    if (this.isCompleteTrick()) {
      this.round.getCurrentTrick().giveTrickToHighestRankingCardPlayer()
      if (this.thereAreMoreTricksLeftToPlay()) {
        this.round.setCurrentTrick(new Trick())
        this.round.setContext(new TrickState(this.round))
      } else {
        this.round.setCurrentTrick = null
        this.round.setContext(new EndOfRoundState(this.round))
      }
    }
  }

  private isCompleteTrick(): boolean {
    return this.round.getCurrentTrick().getNumCardsPlayed() === this.round.getNumPlayers()
  }

  private thereAreMoreTricksLeftToPlay(): boolean {
    return this.round.getCurrentTurnPlayer().hasCardsInHand()
  }

  public getEndOfRoundReport(): EndOfRoundData {
    throw new Error('Round not over in TrickState')
  }
}

export default TrickState
