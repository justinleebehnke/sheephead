import Card from "./Card";

class Deck {
  private stackOfCards: Card[];
  constructor() {
    this.stackOfCards = [];
  }

  public shuffle(seed: string): void {
    // take the current deck and shuffle it using this seed in the randomization algorithm
    throw Error("Shuffle not yet implemented");
  }

  public hasNextCard(): boolean {
    return this.stackOfCards.length > 0;
  }

  public getNextCard(): Card {
    const nextCard = this.stackOfCards.pop();
    if (nextCard) {
      return nextCard;
    }
    throw Error("Cannot get next card on empty deck");
  }
}

export default Deck;
