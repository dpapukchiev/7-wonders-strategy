import { Effect } from "./effect";

export class GetWarShieldsEffect extends Effect {
    constructor(
        private rewardedShieldsCount: number,
    ) {
        super();
        this.rewardedShieldsCount = rewardedShieldsCount;
    }
}