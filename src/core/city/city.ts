import { CityName } from "./cityNames";
import { Wonder } from "./wonder";

export class City {
    constructor(
        private name: CityName,
        private wonders: Wonder[]
    ) {
        this.name = name;
        this.wonders = wonders;
    }
}