import Card from "./Card";
import Hand from "./Hand";
import Trick from "./Trick";

class Player {
  private name: string;
  private hand: Hand;
  private tricksWon: Trick[];

  constructor(name: string) {
    this.name = name;
    this.hand = new Hand();
    this.tricksWon = [];
  }

  public giveCard(card: Card) {
    this.hand.addCard(card);
  }

  public giveTrick(trick: Trick) {
    this.tricksWon.push(trick);
  }
}

export default Player;
