import { ResourceBundle } from "../resource/resourceBundle";
import { ResourceType } from "../resource/ResourceType";
import { Effect } from "./effect";

export class PickResourceForATurnEffect extends Effect {
    constructor(
        private resourceTypes: ResourceType[]
    ) {
        super();
        this.resourceTypes = resourceTypes;
    }
}