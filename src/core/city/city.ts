import { CityName } from "./cityNames";
import { Wonder } from "./wonderStage";

export class City {
    constructor(
        private name: CityName,
        private wonders: Wonder[]
    ) {
        this.name = name;
        this.wonders = wonders;
    }
}