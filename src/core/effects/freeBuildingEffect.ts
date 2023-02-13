import { CardName } from "../cards/cardName";
import { Effect } from "./effect";

export class FreeBuildingEffect extends Effect {
    constructor(
        private freeBuildings: CardName[]
    ) {
        super()
    }
}