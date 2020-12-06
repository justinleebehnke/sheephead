import Command from '../Command'
import Game from '../../Entities/Game'

class JoinGameCommand implements Command {
  private game: Game
  private playerName: string

  constructor(game: Game, playerName: string) {
    this.game = game
    this.playerName = playerName
  }

  execute(): void {
    throw new Error('Method not implemented.')
  }
}

export default JoinGameCommand
