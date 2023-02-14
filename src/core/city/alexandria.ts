import { Cost } from "../cost/cost";
import { VictoryPointEffect } from "../effects/victoryPointEffect";
import { ResourceBundle } from "../resource/resourceBundle";
import { ResourceType } from "../resource/ResourceType";
import { Wonder as WonderStage } from "./wonderStage";
import { City } from "./city";
import { CityName } from "./cityNames";

class AlexandriaCity extends City {
    constructor() {
        super(
            CityName.ALEXANDRIA,
            [
                new WonderStage(
                    new VictoryPointEffect(3),
                    Cost.newBuilder()
                        .resources([
                            new ResourceBundle(ResourceType.RAW_MATERIAL_CLAY, 1)
                        ])
                        .build()
                )
            ]
        )
    }
}

export const Alexandria = new AlexandriaCity()