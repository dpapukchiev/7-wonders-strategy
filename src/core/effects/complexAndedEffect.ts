import { Effect } from "./effect";

export class ComplexAndedEffect extends Effect {
    constructor(
        private effects: Effect[],
    ) {
        super();
        this.effects = effects;
    }
}