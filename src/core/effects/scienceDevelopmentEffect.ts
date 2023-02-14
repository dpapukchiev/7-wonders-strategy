import { ScienceSymbol } from "../cards/scienceSymbol";
import { Effect } from "./effect";

export class ScienceDevelopmentEffect extends Effect {
    constructor(
        private symbol: ScienceSymbol
    ) {
        super();
        this.symbol = symbol;
    }
}