import { CardName } from "../core/cards/cardName";
import { CardType } from "../core/cards/cardType";
import { ScienceSymbol } from "../core/cards/scienceSymbol";
import { ResourceBundle } from "../core/resource/resourceBundle";
import { ResourceType } from "../core/resource/ResourceType";
import {
    ComplexAndedEffect,
    FreeBuildingEffect,
    FreeConstructionEffect,
    GainResourceEffect,
    GetGoldCoinsPerCardEffect,
    GetGoldCoinsPerWonderEffect,
    GetWarShieldsEffect,
    PickResourceForATurnEffect,
    PreferentialTradingEffect,
    ScienceDevelopmentEffect,
    VictoryPointEffect,
    VictoryPointPerCardEffect,
    VictoryPointPerWarPointEffect,
    VictoryPointPerWonderEffect
} from "../core/effects/allEffects";
import { EffectInputDirection } from "../core/effects/modifiers/effectInputDirection";
import { CopyGuildEffect } from "../core/effects/copyGuildCardEffect";

const rawMaterials = [
    ResourceType.RAW_MATERIAL_CLAY,
    ResourceType.RAW_MATERIAL_ORE,
    ResourceType.RAW_MATERIAL_STONE,
    ResourceType.RAW_MATERIAL_WOOD,
];

const manufacturedGoods = [
    ResourceType.MANUFACTURED_GOOD_GLASS,
    ResourceType.MANUFACTURED_GOOD_PAPYRUS,
    ResourceType.MANUFACTURED_GOOD_TEXTILES,
];

new GainResourceEffect(
    new ResourceBundle(ResourceType.RAW_MATERIAL_WOOD, 2)
);

new GainResourceEffect(
    new ResourceBundle(ResourceType.MANUFACTURED_GOOD_PAPYRUS, 1)
);

new PickResourceForATurnEffect(rawMaterials);

new VictoryPointEffect(5);
new GetWarShieldsEffect(3);

new ScienceDevelopmentEffect(ScienceSymbol.WHEEL);

new ScienceDevelopmentEffect(ScienceSymbol.WILDCARD);

new PreferentialTradingEffect(rawMaterials, EffectInputDirection.LEFT_NEIGHBOUR_ONLY);
new PreferentialTradingEffect(manufacturedGoods, EffectInputDirection.NEIGHBOURS_ONLY);

new GetGoldCoinsPerCardEffect(2, CardType.MANUFACTURED_GOOD, EffectInputDirection.SELF_AND_NEIGHBOURS);

new VictoryPointPerCardEffect(2, CardType.MILITARY_STRUCTURE, EffectInputDirection.NEIGHBOURS_ONLY);

new VictoryPointPerWarPointEffect(true, 1, EffectInputDirection.NEIGHBOURS_ONLY);

new ComplexAndedEffect(
    [
        new GetGoldCoinsPerCardEffect(1, CardType.MANUFACTURED_GOOD, EffectInputDirection.SELF_ONLY),
        new VictoryPointPerCardEffect(1, CardType.MANUFACTURED_GOOD, EffectInputDirection.SELF_ONLY),
    ]
)

new GetGoldCoinsPerWonderEffect(2, EffectInputDirection.SELF_AND_NEIGHBOURS);

new VictoryPointPerWonderEffect(3, EffectInputDirection.SELF_AND_NEIGHBOURS);

new ComplexAndedEffect(
    [
        new GetGoldCoinsPerWonderEffect(3, EffectInputDirection.SELF_ONLY),
        new VictoryPointPerWonderEffect(1, EffectInputDirection.SELF_ONLY),
    ]
)

new FreeConstructionEffect()

new FreeBuildingEffect([CardName.FORUM])

new CopyGuildEffect(new VictoryPointPerCardEffect(2, CardType.MANUFACTURED_GOOD, EffectInputDirection.SELF_AND_NEIGHBOURS));