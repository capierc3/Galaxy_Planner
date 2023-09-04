import {Solar_System, Star_Info, System_Info} from "../../../shared/systemEnums.js";
import {dice} from "../utils/dice.js";
import {newStar, newTypedStar} from "./starCreator.js";
import {Star_Types} from "../../../shared/starEnums.js";

export function newSystem() {

    let system = JSON.parse(JSON.stringify(Solar_System));
    getStars(system);
    for (let star in system.stars) {
        system.orbiting_bodies.push({
            name: system.stars[star].name,
            bodies: getBodies()
        });
    }

    return system;
}

/**
 * Returns Star based lower, higher, or similar in Mass
 *
 * @param {number} massDiff 0 = random, 1 = lower mass, 2 = higher mass, anything else = same
 * @param {array} stars star array of the system
 */
export function addStar(massDiff, stars) {
    let star = {};
    let type = stars[0].type
        .replace(' (','_')
        .replace(')','')
        .replace(' ','_');
    let i = Object.keys(Star_Types).indexOf(type);
    if (massDiff === 0) {
        i = 404;
    } else if (massDiff === 2 && i > 1) {
        i--;
    } else if (massDiff === 1 && i < 11) {
        i++;
    }
    if (i !== 404) {
        stars.push(newTypedStar(Object.values(Star_Types)[i]));
    } else {
        stars.push(newStar());
    }
}
function getBodies() {
    let bodies = []
    let bodyAmt = dice.rollD10();
    if (bodyAmt === 10) bodyAmt = 10 + dice.rollD10();
    for (let i = 0; i < bodyAmt; i++) {
        let type = dice.rollD20();
        for (let key in System_Info.body_types) {
            if (type <= key) {
                if (key > 9) {
                    bodies.push(System_Info.body_types[key]());
                } else {
                    bodies.push(System_Info.body_types[key]);
                }
                break;
            }
        }
    }
    return bodies;
}

function getStars(system) {
    let roll = dice.rollD20();
    let starAmt = 1;
    for (let value in Star_Info.number) {
        if (roll <= parseInt(value)) {
            starAmt = Star_Info.number[value].amt;
            system.starsAmt = Star_Info.number[value].desc;
            break;
        }
    }
    system.stars.push(newStar());
    system.stars[0].distanceToBarycenterAU = 0;
    if (starAmt > 1) {
        addStar(getMassDiff(),system.stars);
        let a = dice.rollCustom(1,3162);
        let m1_2 = system.stars[0].mass / system.stars[1].mass;
        system.stars[0].distanceToBarycenterAU = a/(1.0 + m1_2);
        system.stars[1].distanceToBarycenterAU = a - system.stars[0].distanceToBarycenterAU;

    } else if (starAmt > 2) {
        addStar(getMassDiff(),system.stars[0].type);
        system.stars[2].distanceToBarycenterAU = dice.rollCustom(1,1581);
        sortStarByMass(system);
    }
    for (let i = 0; i < system.stars.length; i++) {
        system.stars[i].name = String.fromCharCode(97 + i);
    }
}
function getMassDiff() {
    let roll = dice.rollD20();
    let massDiff;
    if (roll <= Star_Info.nature[0]) {
        massDiff = 3;
    } else if (roll <= Star_Info.nature[1]) {
        massDiff = 0
    } else if (roll <= Star_Info.nature[2]) {
        massDiff = 2
    } else {
        massDiff = 1
    }
    return massDiff;
}

function sortStarByMass(system) {
    system.stars = system.stars.sort((a,b) => {
        if (a.mass > b.mass) {
            return -1;
        }
    });
}
