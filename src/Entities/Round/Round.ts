import Card from '../Card'
import Deck from '../Deck'
import IRoundState from './IRoundState'
import FindingPickerState from './FindingPickerState'
import Player from '../Player'
import ICardRanker from '../ICardRanker'

class Round {
  private players: Player[]
  private indexOfDealer: number
  private indexOfCurrentTurn: number
  private blind: Card[]
  private shuffleSeed: number
  private context: IRoundState
  private bury: Card[]
  private cardRanker: ICardRanker

  constructor(
    players: Player[],
    indexOfDealer: number,
    shuffleSeed: number,
    cardRanker: ICardRanker
  ) {
    this.players = players
    this.indexOfDealer = indexOfDealer
    this.blind = []
    this.shuffleSeed = shuffleSeed
    this.cardRanker = cardRanker
    this.deal()
  }

  public getIndexOfDealer(): number {
    return this.indexOfDealer
  }

  public getIndexOfCurrentTurn(): number {
    return this.indexOfCurrentTurn
  }

  public setBury(bury: Card[]): void {
    this.bury = bury
  }

  public setContext(state: IRoundState): void {
    this.context = state
  }

  public nextTurn(): void {
    if (this.indexOfCurrentTurn === undefined) {
      throw Error('Cannot advance turn where there is no current turn')
    } else {
      this.indexOfCurrentTurn = this.getIndexOfNextPlayer(this.indexOfCurrentTurn)
    }
  }

  public reDeal(): void {
    this.shuffleSeed++
    this.removeAllCards()
    this.deal()
  }

  private removeAllCards(): void {
    this.players.forEach(player => player.clearCards())
    this.blind = []
    this.bury = []
  }

  private deal(): void {
    const deck = new Deck(this.cardRanker)
    deck.shuffle(this.shuffleSeed)

    this.giveEachPlayerThreeCards(deck)
    this.blind.push(deck.getNextCard())
    this.blind.push(deck.getNextCard())
    this.giveEachPlayerThreeCards(deck)
    if (deck.hasNextCard()) {
      throw Error(`Deck is not empty: ${JSON.stringify(deck)}`)
    }
    this.indexOfCurrentTurn = this.getIndexOfNextPlayer(this.indexOfDealer)
    this.context = new FindingPickerState(this)
  }

  private giveEachPlayerThreeCards(deck: Deck): void {
    for (let i = 0; i < this.players.length; i++) {
      const player = this.players[i]
      player.giveCard(deck.getNextCard())
      player.giveCard(deck.getNextCard())
      player.giveCard(deck.getNextCard())
    }
  }

  private getIndexOfNextPlayer(playerIndex: number): number {
    if (playerIndex === this.players.length) {
      return 0
    }
    return playerIndex + 1
  }
}

export default Round
