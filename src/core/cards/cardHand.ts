import { Card } from "./card";

export class CardHand {
    constructor(
        private cards: Card[]
    ) {
        this.cards = cards;
    }
}