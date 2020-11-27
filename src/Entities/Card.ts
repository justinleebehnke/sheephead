const validCardIds: Set<string> = new Set();
validCardIds.add("2c");

class Card {
  private cardId: string;
  constructor(cardId: string) {
    if (this.isValidCardId(cardId)) {
      this.cardId = cardId;
    } else {
      throw Error(`Invalid Card Id: ${cardId}`);
    }
  }

  private isValidCardId(cardId: string) {
    return validCardIds.has(cardId);
  }

  public getCardId(): string {
    return this.cardId;
  }

  public getPointValue(): number {
    console.log("card get point value not implemented");
    return 1;
  }
}

export default Card;
