import { CardType } from "../cards/cardType";
import { Effect } from "./effect";
import { EffectInputDirection } from "./modifiers/effectInputDirection";

export class GetGoldCoinsPerCardEffect extends Effect {
    constructor(
        private coinReward: number,
        private cardTypeMultiplier: CardType,
        private direction: EffectInputDirection,
    ) {
        super();
        this.coinReward = coinReward;
        this.cardTypeMultiplier = cardTypeMultiplier;
        this.direction = direction;
    }
}