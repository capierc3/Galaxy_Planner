import {dice} from "../backend/src/utils/dice.js";

export let planetJson = {

    id: "",
    name: "",
    system_name: "",
    type: "",
    size: "",
    circumference: "",
    radius: "",
    mass: "",
    gravity: "",
    temp: "",
    orbit_length: "",
    location: "",
    distance_from_sun: "",
    atmosphere_pressure_desc: "",
    atmosphere_pressure_apr: "",
    atmosphere_makeup: [],
    tilt_text: "",
    tilt_degrees: "",
    rotation: "",
    rotation_direction: "",
    liquid_amt: "",
    liquid_type: "",
    magnetic_field: "",
    magnetic_field_mt: "",
    magnetic_field_variation: "",
    magnetic_field_variation_location: "",
    terrain: [],
    orbiting_bodies_amt: "",
    orbiting_bodies: [],

}

export const Planet_Types = {
    1: {
        name: "Dwarf Planet",
        size: {
            min: 0,
            max: 2
        }
    },
    2: {
        name: "Gas Planet",
        size: {
            min: 6,
            max: 10
        }
    },
    3: {
        name: "Terrestrial Planet",
        size: {
            min: 1,
            max: 9
        }
    },
}

export const Planet_Sizes = {
    0: {
        name: "Minuscule",
        roll: {
            times: 1,
            dice: dice.rollD10,
            mod: 1.5
        }
    },
    1: {
        name: "Tiny",
        roll: {
            times: 2,
            dice: dice.rollD10,
            mod: 1
        }
    },
    2: {
        name:"Small",
        roll: {
            times: 4,
            dice: dice.rollD10,
            mod: 1
        }
    },
    4: {
        name: "Average",
        roll: {
            times: 10,
            dice: dice.rollD10,
            mod: 1
        }
    },
    6: {
        name: "Large",
        roll: {
            times: 10,
            dice: dice.rollD10,
            mod: 2
        }
    },
    8: {
        name: "Huge",
        roll: {
            times: 10,
            dice: dice.rollD10,
            mod: 3
        }
    },
    9: {
        name: "Enormous",
        roll: {
            times: 10,
            dice: dice.rollD10,
            mod: 4
        }
    },
    10: {
        name: "Massive",
        roll: {
            times: 10,
            dice: dice.rollD10,
            mod: 5
        }
    }
}

export const Atmosphere_Types = {
    1: {
        chemical: "Ammonia",
        effect: "Toxic"
    },
    2: {
        chemical: "Argon",
        effect: "Inert"
    },
    3: {
        chemical: "Carbon Dioxide",
        effect: "Greenhouse"
    },
    4: {
        chemical: "Chlorine",
        effect: "Corrosive"
    },
    5: {
        chemical: "Earth-like",
        effect: "Standard"
    },
    6: {
        chemical: "Helium",
        effect: "Inert"
    },
    7: {
        chemical: "Hydrogen",
        effect: "Combustive"
    },
    8: {
        chemical: "Methane",
        effect: "Toxic"
    },
    9: {
        chemical: "Nitrogen",
        effect: "Suffocating"
    },
    10: {
        chemical: "Oxygen",
        effect: "Combustive"
    },
    11:{
        chemical: "Sulphur",
        effect: "Volcanic"
    }
}

export const Atmosphere_Pressure = {
    0: {
        thickness: "Negligible/None",
        apr: 0
    },
    1: {
        thickness: "Trace",
        apr: 1,
    },
    2: {
        thickness: "Light",
        apr: 2
    },
    3: {
        thickness: "Thin",
        apr: 4
    },
    4: {
        thickness: "Thinner",
        apr: 6
    },
    5: {
        thickness: "Below Standard",
        apr: 8
    },
    6: {
        thickness: "Standard",
        apr: 10
    },
    7: {
        thickness: "High",
        apr: 20
    },
    8: {
        thickness: "Thick",
        apr: 40
    },
    9: {
        thickness: "Slightly Dense",
        apr: 80
    },
    10: {
        thickness: "Dense",
        apr: 100
    },
    11: {
        thickness: "Very Dense",
        apr: 200
    },
    12: {
        thickness: "Super Dense",
        apr: 400
    },
    13: {
        thickness: "Ultra-Dense",
        apr: 40
    }
}

export const Planet_Mass_Gravity = {
    1: {
        mass: "Negligible",
        gravity: {
            low: 0,
            high: 0
        }
    },
    2: {
        mass: "Very Low",
        gravity: {
            low: 0.01,
            high: 0.04
        }
    },
    3: {
        mass: "Low",
        gravity: {
            low: 0.05,
            high: 0.10
        }
    },
    4: {
        mass: "Light",
        gravity: {
            low: 0.2,
            high: 0.4
        }
    },
    5: {
        mass: "Below Average",
        gravity: {
            low: 0.5,
            high: 0.7
        }
    },
    6: {
        mass: "Average",
        gravity: {
            low: 0.8,
            high: 1.2
        }
    },
    7: {
        mass: "Above Average",
        gravity: {
            low: 1.3,
            high: 1.7
        }
    },
    8: {
        mass: "Heavy",
        gravity: {
            low: 1.8,
            high: 2
        }
    },
    9: {
        mass: "Very Heavy",
        gravity: {
            low: 2.1,
            high: 2.5
        }
    },
    10: {
        mass: "Massive",
        gravity: {
            low: 2.6,
            high: 2.7
        }
    },
    11: {
        mass: "Enormous",
        gravity: {
            low: 2.8,
            high: 3.0
        }
    },
    12: {
        mass: "Extreme",
        gravity: {
            low: 3.0,
            high: 0.1
        }
    }
}

export const Tilt = {
    1: {
        desc: "None",
        mod: 0
    },
    2: {
        desc: "Slight",
        mod: 0
    },
    3: {
        desc: "Minor",
        mod: 10
    },
    4: {
        desc: "Notable",
        mod: 20
    },
    5: {
        desc: "Moderate",
        mod: 30
    },
    6: {
        desc: "Large",
        mod: 40
    },
    7: {
        desc: "Great",
        mod: 50
    },
    8: {
        desc: "Severe",
        mod: 60
    },
    9: {
        desc: "Huge",
        mod: 70
    },
    10: {
        desc: "Extreme",
        mod: 80
    },
}

export const Rotation = {
    1: {
        rolls: 1,
        dice: dice.rollD4
    },
    2: {
        rolls: 1,
        dice: dice.rollD8
    },
    3: {
        rolls: 1,
        dice: dice.rollD10
    },
    4: {
        rolls: 2,
        dice: dice.rollD10
    },
    5: {
        rolls: 4,
        dice: dice.rollD10
    },
    6: {
        rolls: 5,
        dice: dice.rollD10
    },
    7: {
        rolls: 6,
        dice: dice.rollD10
    },
    8: {
        rolls: 7,
        dice: dice.rollD10
    },
    9: {
        rolls: 8,
        dice: dice.rollD10
    },
    10: {
        rolls: 9,
        dice: dice.rollD10
    },
    11: {
        rolls: 10,
        dice: dice.rollD10
    },
    12: {
        rolls: 12,
        dice: dice.rollD10
    },
    13: {
        rolls: 1,
        dice: dice.rollD10
    },
}

export const Hydrosphere = {
    amt: {
        1: {
            min: 0,
            max: 0
        },
        2: {
            min: 1,
            max: 5
        },
        3: {
            min: 6,
            max: 15
        },
        4: {
            min: 16,
            max: 25
        },
        5: {
            min: 26,
            max: 35
        },
        6: {
            min: 36,
            max: 45
        },
        7: {
            min: 46,
            max: 55
        },
        8: {
            min: 56,
            max: 65
        },
        9: {
            min: 66,
            max: 75
        },
        10: {
            min: 76,
            max: 85
        },
        11: {
            min: 86,
            max: 95
        },
        12: {
            min: 96,
            max: 100
        },
    },
    type: {
        11: "H20",
        12: "Ammonia",
        13: "Bromine",
        14: "Caesium",
        15: "Francium",
        16: "Gallium",
        17: "Liquid Nitrogen",
        18: "Liquid Oxygen",
        19: "Mercury",
        20: "Rubidium"
    }
}

export const Magnetic = {
    50: {
        desc: "No regional variance"
    },
    75: {
        desc: "Higher at ",
        location: {
            1: "one pole",
            2: "equator",
            3: "random spot",
            4: "both poles"
        }
    },
    96: {
        desc: "Fluxing at ",
        location: {
            1: "poles",
            2: "equator",
            3: "random spot",
            4: "whole planet"
        },
    },
    100: {
        desc: "Unstable at ",
        location: {
            1: "poles",
            2: "equator",
            3: "random spot",
            4: "whole planet"
        }
    }
}

export const Terrain = [
    "Aquatic - Deep",
    "Aquatic – Shallow",
    "Arctic/Frozen",
    "Canyon",
    "Desert",
    "Exotic/”impossible”/Other",
    "Forest",
    "Glacier",
    "Grassland",
    "Hills",
    "Islands",
    "Jungle",
    "Mountains/Valleys",
    "Plains",
    "Rivers/Lakes",
    "Scrubland",
    "Swamp/Bog",
    "Tundra",
    "Unnatural/Artificial",
    "Wasteland/Devastation"
]

export const Orbital_Types = [
    "Cloud - Dust",
    "Cloud – Gas",
    "Debris – Natural",
    "Debris – Artificial/Junk",
    "Moon",
    "Ring",
    "Artificial Construction"
]

export const Ring_Types = ["Ice","Rock","Mixture"]
