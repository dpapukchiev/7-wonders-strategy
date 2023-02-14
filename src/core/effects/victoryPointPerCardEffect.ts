import { CardType } from "../cards/cardType";
import { Effect } from "./effect";
import { EffectInputDirection } from "./modifiers/effectInputDirection";

export class VictoryPointPerCardEffect extends Effect {

    constructor(
        private rewardedPoints: number,
        private cardTypeMultiplier: CardType,
        private direction: EffectInputDirection,
    ) {
        super();
        this.rewardedPoints = rewardedPoints;
        this.cardTypeMultiplier = cardTypeMultiplier;
        this.direction = direction;
    }
}