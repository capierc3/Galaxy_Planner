import {
    Atmosphere_Pressure,
    Atmosphere_Types, Hydrosphere, Magnetic, Orbital_Types,
    Planet_Mass_Gravity,
    Planet_Sizes,
    Planet_Types,
    planetJson, Ring_Types, Rotation, Terrain, Tilt
} from "./planetEnums.js";
import {dice} from "../utils/dice.js";
import {shuffle} from "../utils/arrayUtils.js";

export function newPlanet() {

    let planet = planetJson;
    // Type
    let roll = dice.rollCustom(1, 3);
    planet.type = Planet_Types[roll].name;
    // Size
    let planetSizeMod = 0
    roll = dice.rollCustom(Planet_Types[roll].size.min, Planet_Types[roll].size.max);
    for (let size in Planet_Sizes) {
        if (roll >= size) {
            planetSizeMod = parseInt(size);
            planet.size = Planet_Sizes[size].name;
            let times = Planet_Sizes[size].roll.times;
            let mod = Planet_Sizes[size].roll.mod;
            let die = Planet_Sizes[size].roll.dice;
            planet.circumference = (dice.rollHandful(die, times) * mod) * 1000;
            planet.radius = planet.circumference / (2.0 * Math.PI);
        } else {
            break;
        }
    }
    roll = (dice.rollD10()) - 2;
    let dr = planetSizeMod + roll;
    if (dr <= 0) {
        planet.mass = Planet_Mass_Gravity[1].mass;
        planet.gravity = dice.rollCustomFrac(Planet_Mass_Gravity[1].gravity.low, Planet_Mass_Gravity[1].gravity.high);
    } else if (dr < 12) {
        planet.mass = Planet_Mass_Gravity[dr].mass;
        planet.gravity = dice.rollCustomFrac(Planet_Mass_Gravity[dr].gravity.low, Planet_Mass_Gravity[dr].gravity.high);
    } else {
        planet.mass = Planet_Mass_Gravity[12].mass;
        planet.gravity = Planet_Mass_Gravity[12].gravity.low + (planetSizeMod * Planet_Mass_Gravity[12].gravity.high);
    }
    // Atmosphere
    let perLeft = 100;
    for (let i = 0; i < 2; i++) {
        roll = dice.rollCustom(1, perLeft);
        perLeft -= roll;
        let roll2 = dice.rollCustom(1, 11);
        planet.atmosphere_makeup.push({
            name: Atmosphere_Types[roll2].chemical,
            effect: Atmosphere_Types[roll2].effect,
            percent: roll
        });
        if (perLeft <= 0) {
            break;
        }
    }
    if (perLeft > 0) {
        roll = dice.rollCustom(1, 11);
        planet.atmosphere_makeup.push({
            name: Atmosphere_Types[roll].chemical,
            effect: Atmosphere_Types[roll].effect,
            percent: perLeft
        });
    }
    let ap = (dice.rollD10() - 3.0) + (planetSizeMod / 2.0) + (dr / 2);
    ap = Math.round(ap);
    if (ap < 1) {
        planet.atmosphere_pressure_desc = Atmosphere_Pressure[1].thickness;
        planet.atmosphere_pressure_apr = Atmosphere_Pressure[1].apr;
    }
    if (ap < 13) {
        planet.atmosphere_pressure_desc = Atmosphere_Pressure[ap].thickness;
        planet.atmosphere_pressure_apr = Atmosphere_Pressure[ap].apr;
    } else {
        planet.atmosphere_pressure_desc = Atmosphere_Pressure[13].thickness;
        planet.atmosphere_pressure_apr = Atmosphere_Pressure[13].apr * ap;
    }
    //tilt & rotation
    roll = dice.rollD10();
    if (roll > 1) {
        planet.tilt_text = Tilt[roll].desc;
        planet.tilt_degrees = dice.rollD10() + Tilt[roll].mod;
    } else {
        planet.tilt_text = Tilt[roll].desc;
        planet.tilt_degrees = 0;
    }
    roll = (dice.rollD10() - 1) + planetSizeMod;
    if (roll >= 13) {
        planet.rotation = dice.rollHandful(dice.rollD10, roll);
    } else {
        planet.rotation = dice.rollHandful(Rotation[roll].dice, Rotation[roll].rolls);
    }
    roll = dice.rollPercent();
    if (roll < 71) {
        planet.rotation_direction = "Prograde";
    } else {
        planet.rotation_direction = "Retrograde";
    }
    //Hydrosphere
    roll = dice.rollD12();
    planet.liquid_amt = dice.rollCustom(Hydrosphere.amt[roll].min, Hydrosphere.amt[roll].max);
    roll = dice.rollD20();
    if (roll < 12) {
        planet.liquid_type = Hydrosphere.type[11];
    } else {
        planet.liquid_type = Hydrosphere.type[roll];
    }
    //Magnetic Field
    roll = (dice.rollD10() - 6) + dr;
    if (roll <= 1) {
        planet.magnetic_field = 0;
    } else {
        let high = .25 * Math.pow(2, (roll - 2));
        let low = .25 * Math.pow(2, (roll - 3));
        planet.magnetic_field = dice.rollCustomFrac(low, high);
    }
    planet.magnetic_field_mt = 45 * planet.magnetic_field;
    roll = dice.rollPercent();
    if (roll <= 50) {
        planet.magnetic_field_variation_location = Magnetic[50].desc;
    } else if (roll <= 75) {
        planet.magnetic_field_variation_location = Magnetic[75].desc + Magnetic[75].location[dice.rollD4()];
    } else if (roll <= 96) {
        let flux = '(' + dice.rollPercent() + ' days)';
        planet.magnetic_field_variation_location = Magnetic[96].desc + Magnetic[96].location[dice.rollD4()] + flux;
    } else {
        planet.magnetic_field_variation_location = Magnetic[100].desc + Magnetic[100].location[dice.rollD4()];
    }
    planet.magnetic_field_variation = dice.rollCustom(10, 60) + '%';
    //Terrain
    if (planet.type !== "Gas Planet") {
        let coverage = 100;
        let terrainType = Terrain;
        while (coverage > 0) {
            roll = dice.rollCustom(1, coverage);
            shuffle(terrainType);
            planet.terrain.push({
                type: terrainType.pop(),
                coverage_percent: roll
            });
            coverage -= roll;
        }
        //orbiting bodies non Gas
        roll = dice.rollD20();
        let bodyAmt;
        if (roll <= 10) {
            bodyAmt = 0;
        } else if (roll <= 15) {
            bodyAmt = 1;
        } else if (roll === 20) {
            bodyAmt = dice.rollHandful(dice.rollD4, 2);
        } else {
            bodyAmt = roll - 14;
        }
        planet.orbiting_bodies_amt = bodyAmt;
    } else {
        //orbiting bodies Gas
        roll = dice.rollD20();
        let bodyAmt;
        if (roll <= 10) {
            bodyAmt = roll;
        } else if (roll <= 15) {
            bodyAmt = roll * 2;
        } else if (roll === 20) {
            bodyAmt = dice.rollCustom(50, 75);
        } else {
            bodyAmt = dice.rollCustom(30, 50);
        }
        planet.orbiting_bodies_amt = bodyAmt;
    }
    for (let i = 0; i < planet.orbiting_bodies_amt; i++) {
        roll = dice.rollD20();
        let type = "";
        if (roll <= 2) {
            type = Orbital_Types[0]
        } else if (roll === 3) {
            type = Orbital_Types[1]
        } else if (roll <= 5) {
            type = Orbital_Types[2]
        } else if (roll <= 7) {
            type = Orbital_Types[3]
        } else if (roll <= 16) {
            type = Orbital_Types[4]
        } else if (roll <= 18) {
            type = Orbital_Types[5] + " - " + Ring_Types[dice.rollCustom(0, 2)];
        } else if (roll <= 20) {
            type = Orbital_Types[6]
        }
        planet.orbiting_bodies.push({
            type: type
        });
    }
    return planet;
}