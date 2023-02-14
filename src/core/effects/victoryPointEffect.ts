import { Effect } from "./effect";

export class VictoryPointEffect extends Effect {

    constructor(
        private rewardedPoints: number
    ) {
        super();
        this.rewardedPoints = rewardedPoints;
    }
}