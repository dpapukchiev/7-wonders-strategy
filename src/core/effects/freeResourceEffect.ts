import { ResourceBundle } from "../resource/resourceBundle";
import { Effect } from "./effect";

export class FreeResourceEffect extends Effect {
    constructor(
        private freeResources: ResourceBundle[]
    ) {
        super()
    }
}