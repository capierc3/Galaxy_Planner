import {dice} from "../utils/dice.js";
import {Main_Sequence_Rarity, Star_Rarity, Star_Info} from "./starEnums.js";

let star = {
    name : "",
    type : "",
    mass : "",
    radius : "",
    temp : ""
}

export function newStar() {
    let roll = dice.rollD20();
    for (let rarity in Star_Rarity) {
        if (roll >= rarity) {
            star.type = Star_Rarity[rarity];
        } else {
            break;
        }
    }
    if (star.type === "Main Sequence") {
        roll = dice.rollPercent();
        for (let rarity in Main_Sequence_Rarity) {
            if (roll >= rarity) {
                star.type = Main_Sequence_Rarity[rarity];
            } else {
                break;
            }
        }
    }
    return newTypedStar(star.type);
}

export function newTypedStar(Star_Type) {
    star.type = Star_Type;
    star.mass = dice.rollCustomFrac(Star_Info[star.type].Solar_Mass.min, Star_Info[star.type].Solar_Mass.max);
    // find radius based on a 1 to 1 ratio with mass (I know not really the correct ratio)
    let range = Star_Info[star.type].Solar_Mass.max - Star_Info[star.type].Solar_Mass.min;
    let pos = star.mass - Star_Info[star.type].Solar_Mass.min;
    let percent = pos / range;
    range = Star_Info[star.type].Solar_Radius.max - Star_Info[star.type].Solar_Radius.min;
    star.radius = (percent * range) + Star_Info[star.type].Solar_Radius.min
    star.temp = dice.rollCustom(Star_Info[star.type].color.min, Star_Info[star.type].color.max);
    return star;
}