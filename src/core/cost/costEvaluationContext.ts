import { Card } from "../cards/card";
import { ResourceBundle } from "../resource/resourceBundle";

export class CostEvaluationContext {
    constructor(
        public playerResources: ResourceBundle[],
        public playerBuiltCards: Card[]
    ) {

    }
}