import { ResourceBundle } from "../resource/resourceBundle";
import { Effect } from "./effect";

export class GainResourceEffect extends Effect {
    constructor(
        private newResource: ResourceBundle
    ) {
        super();
        this.newResource = newResource;
    }
}