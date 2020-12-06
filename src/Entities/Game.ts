import Player from './Player'
import UniqueIdentifier from '../Utilities/UniqueIdentifier'

class Game {
  private players: Player[]

  constructor() {
    this.players = []
  }

  // the host has the ability to kick out a player (this is if they freeze or aren't taking their turn)
  // when the game starts all the players are passed in
  // at any time anyone can leave a game
  // then the game ends and all the points and progress get discarded

  public addPlayer(name: string) {
    this.players.push(new Player(name, new UniqueIdentifier()))
    if (this.players.length === 4) {
      this.startGame()
    }
  }

  public startGame(): void {
    // okay so now we have a deck
    // we need to know who's turn it is to deal
    // we need to send a command to say that someone has dealt and the seed that they used
  }

  public nextTurn(): void {}
  public nextDealer(): void {}

  // once we see that a command has come in that someone has dealt
  // the person to the left of that person should be offered to pick
}

export default Game
