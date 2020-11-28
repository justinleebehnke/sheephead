import Card from "./Card";
import Player from "./Player";

class Trick {
  private cardsInTrick: Card[];
  private highestRankedCardValue: number;

  constructor() {
    this.cardsInTrick = [];
    this.highestRankedCardValue = 0;
  }

  public addCardToTrick(card: Card, player: Player): void {
    // if this card is the ranking card
    // then this player is the new owner
    this.cardsInTrick.push(card);
  }

  public getTrickValue(): number {
    return this.cardsInTrick.reduce(
      (total: number, current: Card) => (total += current.getPointValue()),
      0
    );
  }
}

export default Trick;
