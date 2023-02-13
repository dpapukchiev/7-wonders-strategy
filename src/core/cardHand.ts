import { Card } from "./cards/card";

export class CardHand {
    constructor(
        private cards: Card[]
    ) {
        this.cards = cards;
    }
}