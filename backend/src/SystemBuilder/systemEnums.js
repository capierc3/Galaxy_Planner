import {dice} from "../utils/dice.js";

export const Solar_System = {
    name: "",
    size: "",
    habitable_zone: {},
    stars: [],
    planets: [],
    solar_bodies: [],

}

export const Star_Info = {
    number: {
        12: {
            desc: "Single",
            amt: 1
        },
        19: {
            // 1/3 chance to have planets
            desc: "Binary",
            amt: 2
        },
        21: {
            // very rare to have planets
            desc: "Tri-System",
            amt: 3
        }
    },
    nature: {
        1: "Same",
        6: "random",
        11: "higher",
        16: "lower"
    },
    habitable: {
        "Main Sequence (O)": {
            min: 32565,
            max: 99018
        },
        "Main Sequence (B)": {
            min: 3731,
            max: 41133
        },
        "Main Sequence (A)": {
            min: 1357,
            max: 4948
        },
        "Main Sequence (F)": {
            min: 607,
            max: 1890
        },
        "Main Sequence (G)": {
            min: 351,
            max: 872.9
        },
        "Main Sequence (K)": {
            min: 107,
            max: 480
        },
        "Main Sequence (M)": {
            min: 0.51,
            max: 200.85
        }
    }
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
            die: dice.rollD4(),
            times: 1
        },
        8: {
            die: dice.rollD4(),
            times: 2
        },
        9: {
            die: dice.rollD6(),
            times: 2
        },
        10: {
            die: dice.rollD6(),
            times: 3
        },
        11: {
            die: dice.rollD8(),
            times: 2
        },
        12: {
            die: dice.rollD10(),
            times: 2
        },
        13: {
            die: dice.rollD10(),
            times: 3
        },
        14: {
            die: dice.rollD10(),
            times: 4
        },
        15: {
            die: dice.rollD10(),
            times: 5
        },
        16: {
            die: dice.rollD10(),
            times: 6
        },
        17: {
            die: dice.rollD10(),
            times: 7
        },
        18: {
            die: dice.rollD10(),
            times: 8
        },
        19: {
            die: dice.rollD10(),
            times: 9
        },
        20: {
            die: dice.rollD10(),
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
    }
}
