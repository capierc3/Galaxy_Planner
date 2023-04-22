import {dice} from "../utils/dice.js";
import {newPlanet} from "./planetCreator.js";

export const Solar_System = {
    name: "",
    size: "",
    population: "",
    starsAmt: "",
    stars: [],
    barycenter: "",
    orbiting_bodies: [],
    location: {},
    sectorName: "",
    id: "",
}

export const Star_Info = {
    number: {
        14: {
            desc: "Single",
            amt: 1
        },
        19: {
            // 1/3 chance to have planets
            desc: "Binary",
            amt: 2
        },
        20: {
            // very rare to have planets
            desc: "Tri-System",
            amt: 3
        }
    },
    nature: {
        6: "Same",
        11: "random",
        16: "higher",
        20: "lower"
    },
}

export const System_Info = {
    size: {
        1: {
            die: function () {return (1/4)},
            times: 1
        },
        2: {
            die: function () {return (1/3)},
            times: 1
        },
        3: {
            die: function () {return (1/2)},
            times: 1
        },
        4: {
            die: function () {return (2/3)},
            times: 1
        },
        5: {
            die: function () {return (3/4)},
            times: 1
        },
        6: {
            die: function () {return 1},
            times: 1
        },
        7: {
            die: dice.rollD4,
            times: 1
        },
        8: {
            die: dice.rollD4,
            times: 2
        },
        9: {
            die: dice.rollD6,
            times: 2
        },
        10: {
            die: dice.rollD6,
            times: 3
        },
        11: {
            die: dice.rollD8,
            times: 2
        },
        12: {
            die: dice.rollD10,
            times: 2
        },
        13: {
            die: dice.rollD10,
            times: 3
        },
        14: {
            die: dice.rollD10,
            times: 4
        },
        15: {
            die: dice.rollD10,
            times: 5
        },
        16: {
            die: dice.rollD10,
            times: 6
        },
        17: {
            die: dice.rollD10,
            times: 7
        },
        18: {
            die: dice.rollD10,
            times: 8
        },
        19: {
            die: dice.rollD10,
            times: 9
        },
        20: {
            die: dice.rollD10,
            times: 1
        },
    },
    temp: {
        hot: {
            max: 600,
            min: 200
        },
        habitable: {
            max: 200,
            min: 5
        },
        cold: {
            max: 5,
            min: -600
        },
    },
    distance_conversion: {
        au_ls: 499,
        ls_au: (1/499)
    },
    body_types: {
        1: new function () {
            return {type: "Anomaly"}
        },
        2: new function () {
            return {type: "Structure/Item"}
        },
        3: new function () {
            return {type: "Asteroid"}
        },
        6: new function () {
            return {type: "Asteroid Belt"}
        },
        7: new function () {
            return {type: "Comet"}
        },
        8: new function () {
            return {type: "Dust Cloud"}
        },
        9: new function () {
            return {type: "Oort Cloud"}
        },
        20: new function () {
            return newPlanet
        }
    }
}
