import { ResourceType } from "../resource/ResourceType";
import { Effect } from "./effect";
import { EffectInputDirection } from "./modifiers/effectInputDirection";

export class PreferentialTradingEffect extends Effect {

    constructor(
        private resourceTypes: ResourceType[],
        private direction: EffectInputDirection
    ) {
        super();
        this.resourceTypes = resourceTypes;
        this.direction = direction;
    }
}