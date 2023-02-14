import { Effect } from "./effect";
import { EffectInputDirection } from "./modifiers/effectInputDirection";

export class VictoryPointPerWarPointEffect extends Effect {

    constructor(
        private rewardedForLostPoints: boolean,
        private rewardedPoints: number,
        private direction: EffectInputDirection
    ) {
        super();
        this.rewardedForLostPoints = rewardedForLostPoints;
        this.rewardedPoints = rewardedPoints;
        this.direction = direction;
    }
}