import Card from "./Card";
import Hand from "./Hand";

class Player {
  private name: string;
  private hand: Hand;

  constructor(name: string) {
    this.name = name;
    this.hand = new Hand();
  }

  public giveCard(card: Card) {
    this.hand.addCard(card);
  }
}

export default Player;
