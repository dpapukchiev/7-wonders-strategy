import { CardHand } from "../cards/cardHand";
import { City } from "../city/city";
import { GoldVault } from "./goldVault";

export class Player {
    private goldVault: GoldVault;
    constructor(
        private name: string,
        private city: City,
        private hand: CardHand
    ) {
        this.name = name;
        this.goldVault = new GoldVault()
    }
}