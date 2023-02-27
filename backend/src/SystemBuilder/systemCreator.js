import {Solar_System, Star_Info} from "./systemEnums.js";
import {dice} from "../utils/dice.js";
import {newStar} from "./starCreator.js";

export function newSystem() {

    let system = Solar_System;
    let roll = dice.rollD20();
    system.stars.push(newStar());
    if (Star_Info.habitable[system.stars[0].type] === undefined) {
        system.habitable_zone = {min:0,max:0};
    } else {
        system.habitable_zone = Star_Info.habitable[system.stars[0].type];
    }
    let bodiesAmt = (dice.rollD10() - 1);
    if (bodiesAmt === 9) {
        bodiesAmt = dice.rollD10() + 9;
    }
    roll = dice.rollD20() + bodiesAmt;
    if (roll >= 20) {

    } else {

    }



    return system;
}