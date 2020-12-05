import Card from '../Card'
import CardData from '../DataStructures/CardData'
import BuryData from '../DataStructures/BuryData'
import TrickData from '../DataStructures/TrickData'
import EndOfRoundData from './EndOfRoundReportData'
import IRoundState from './IRoundState'
import Round from './Round'
import Trick from '../Trick'

class EndOfRoundState implements IRoundState {
  private round: Round
  constructor(round: Round) {
    this.round = round
  }

  pass(): void {
    throw new Error('Cannot pass in EndOfRoundState.')
  }

  bury(cardA: Card, cardB: Card): void {
    throw new Error(
      `Cannot bury "${cardA.getCardId()}" & "${cardB.getCardId()}" in EndOfRoundState.`
    )
  }

  play(card: Card): void {
    throw new Error(`Cannot play "${card.getCardId()}" in EndOfRoundState.`)
  }

  getEndOfRoundReport(): EndOfRoundData {
    return {
      bury: this.getBuryData(),
      tricks: this.getAllTrickData()
    }
  }

  private getBuryData(): BuryData {
    return {
      cards: this.round.getBury().map(this.getCardData)
    }
  }

  private getCardData(card: Card): CardData {
    return {
      cardId: card.getCardId(),
      pointValue: card.getPointValue()
    }
  }

  private getAllTrickData(): TrickData[] {
    const allTricks: Trick[] = []
    this.round.getPlayers().forEach(player => {
      allTricks.concat(player.getTricksWon())
    })
    return allTricks.map(trick => trick.getTrickData())
  }
}

export default EndOfRoundState
