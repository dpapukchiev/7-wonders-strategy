import { Cost } from "../cost/cost";
import { Effect } from "../effects/effect";

export class Wonder {
    public isBuilt: boolean = false;
    constructor(
        public effect: Effect,
        public cost: Cost
    ) { }

    public buildWonder() {
        this.isBuilt = true;
    }
}