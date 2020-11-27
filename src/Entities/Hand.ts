import Card from "./Card";

class Hand {
  private hand: Card[];

  constructor() {
    this.hand = [];
  }

  public getCard(cardId: string): Card {
    // find the card that has that cardId and then remove and return it
    throw Error("get card not implemented");
  }

  public addCard(card: Card): void {
    this.hand.push(card);
  }
}

export default Hand;
