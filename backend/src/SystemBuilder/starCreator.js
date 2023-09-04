import {dice} from "../utils/dice.js";
import {Main_Sequence_Rarity, Star_Rarity, Star_Info, Star} from "../../../shared/starEnums.js";

export function newStar() {
    let roll = dice.rollD20();
    let starType;
    for (let rarity in Star_Rarity) {
        if (roll >= rarity) {
            starType = Star_Rarity[rarity];
        } else {
            break;
        }
    }
    if (starType === "Main Sequence") {
        roll = dice.rollPercent();
        for (let rarity in Main_Sequence_Rarity) {
            if (roll >= rarity) {
                starType = Main_Sequence_Rarity[rarity];
            } else {
                break;
            }
        }
    }
    return newTypedStar(starType);
}

export function newTypedStar(Star_Type) {
    let star = JSON.parse(JSON.stringify(Star));
    star.type = Star_Type;
    star.habitable_zoneLS = Star_Info[Star_Type].habitable;
    try {
        star.mass = dice.rollCustomFrac(Star_Info[star.type].Solar_Mass.min, Star_Info[star.type].Solar_Mass.max);
    } catch (e) {
        console.log("Error with " + Star_Type);
    }
    // find radius based on a 1 to 1 ratio with mass (I know not really the correct ratio)
    let range = Star_Info[star.type].Solar_Mass.max - Star_Info[star.type].Solar_Mass.min;
    let pos = star.mass - Star_Info[star.type].Solar_Mass.min;
    let percent = pos / range;
    range = Star_Info[star.type].Solar_Radius.max - Star_Info[star.type].Solar_Radius.min;
    star.radius = (percent * range) + Star_Info[star.type].Solar_Radius.min
    star.temp = dice.rollCustom(Star_Info[star.type].color.min, Star_Info[star.type].color.max);
    return star;
}