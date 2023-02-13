import { Cost } from "./cost/cost";
import { Effect } from "./effects/effect";

export class Wonder {
    constructor(
        public effect: Effect,
        public cost: Cost
    ) { }
}