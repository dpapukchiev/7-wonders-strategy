import { Effect } from "./effect";
import { EffectInputDirection } from "./modifiers/effectInputDirection";

export class VictoryPointPerWonderEffect extends Effect {

    constructor(
        private rewardedPoints: number,
        private direction: EffectInputDirection
    ) {
        super();
        this.rewardedPoints = rewardedPoints;
        this.direction = direction;
    }
}