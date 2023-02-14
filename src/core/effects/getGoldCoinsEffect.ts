import { CardType } from "../cards/cardType";
import { Effect } from "./effect";

export class GetGoldCoinsEffect extends Effect {
    constructor(
        private coinReward: number,
    ) {
        super();
        this.coinReward = coinReward;
    }
}