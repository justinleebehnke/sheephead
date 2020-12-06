import BellePlaineRulesCardRanker from './BellePlaineRulesCardRanker'
import Player from './Player'
import Round from './Round/Round'
import UniqueIdentifier from '../Utilities/UniqueIdentifier'

class Game {
  private players: Player[]
  private currentDealer: number
  private currentRound: Round | null

  constructor(players: Player[], dealerIndex: number) {
    this.players = players
    this.currentDealer = dealerIndex
    this.currentRound = null
  }

  public addPlayer(name: string) {
    this.players.push(new Player(name, new UniqueIdentifier()))
    if (this.players.length === 4) {
      this.playRound()
    }
  }

  private playRound(): void {
    this.currentRound = new Round(
      this.players,
      this.currentDealer,
      Date.now(),
      new BellePlaineRulesCardRanker()
    )
  }

  public playAnotherRound(): void {
    this.setNextDealer()
    this.playRound()
  }

  private setNextDealer(): void {
    if (this.currentDealer === this.players.length - 1) {
      this.currentDealer = 0
    } else {
      this.currentDealer++
    }
  }

  public getCurrentRound(): Round | null {
    return this.currentRound
  }
}

export default Game
