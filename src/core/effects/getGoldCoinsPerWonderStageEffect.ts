import { Effect } from "./effect";
import { EffectInputDirection } from "./modifiers/effectInputDirection";

export class GetGoldCoinsPerWonderEffect extends Effect {
    constructor(
        private coinReward: number,
        private direction: EffectInputDirection
    ) {
        super();
        this.coinReward = coinReward;
        this.direction = direction;
    }
}