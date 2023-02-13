import { Builder } from "builder-pattern";
import { CardName } from "../cards/cardName";
import { ResourceBundle } from "../resource/resourceBundle";

export class Cost {
    public freeUpgrade: CardName[] = []
    public resources: ResourceBundle[] = []

    public static newBuilder() {
        return Builder<Cost>();
    }
}