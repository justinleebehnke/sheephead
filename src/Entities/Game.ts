import Player from "./Player";
import Trick from "./Trick";

class Game {
  private players: Player[];
  private tricks: Trick[];

  constructor() {
    this.players = [];
    this.tricks = [];
  }

  public addPlayer(name: string) {
    this.players.push(new Player(name));
    if (this.players.length === 4) {
      this.startGame();
    }
  }

  public startGame(): void {
    // okay so now we have a deck
    // we need to know who's turn it is to deal
    // we need to send a command to say that someone has dealt and the seed that they used
  }

  public nextTurn(): void {
    
  }

  // once we see that a command has come in that someone has dealt
  // the person to the left of that person should be offered to pick
}

export default Game;
