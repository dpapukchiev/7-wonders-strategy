import { Cost } from "../cost/cost";
import { Effect } from "../effects/effect";
import { CardName } from "./cardName";
import { CardType } from "./cardType";

export class Card {
    constructor(
        private name: CardName,
        private type: CardType,
        private effect: Effect,
        private cost: Cost,
    ) {

    }
}