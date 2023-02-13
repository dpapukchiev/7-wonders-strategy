import { Builder } from "builder-pattern";
import { CardName } from "../cards/cardName";
import { ResourceBundle } from "../resource/resourceBundle";
import { CostEvaluationContext } from "./costEvaluationContext";

export class Cost {
    public freeUpgrade: CardName[] = []
    public resources: ResourceBundle[] = []

    public static newBuilder() {
        return Builder<Cost>();
    }

    public isCovered(conext: CostEvaluationContext): boolean {
        return false;
    }
}