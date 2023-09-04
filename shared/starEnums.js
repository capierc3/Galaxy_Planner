
export const Star = {
    name : "",
    type : "",
    mass : "",
    radius : "",
    temp : "",
    distanceToBarycenter: "",
    habitable_zoneLS: {}
}
export const Star_Types = {
    White_Dwarf :"White Dwarf",
    Red_Dwarf :"Red Dwarf",
    Main_Sequence_M:"Main Sequence (M)",
    Main_Sequence_K:"Main Sequence (K)",
    Main_Sequence_G:"Main Sequence (G)",
    Main_Sequence_F:"Main Sequence (F)",
    Main_Sequence_A:"Main Sequence (A)",
    Red_Giant :"Red Giant",
    Main_Sequence_B:"Main Sequence (B)",
    Neutron :"Neutron",
    Super_Giant:"Super Giant",
    Main_Sequence_O:"Main Sequence (O)"
}

export const Star_Rarity = {
    0 : "Main Sequence",
    14 : "Red Giant",
    15 : "White Dwarf",
    17 : "Red Dwarf",
    19 : "Neutron",
    20 : "Super Giant"
}

export const Main_Sequence_Rarity = {
    0:"Main Sequence (O)",
    6:"Main Sequence (B)",
    9:"Main Sequence (A)",
    15:"Main Sequence (F)",
    20:"Main Sequence (G)",
    30:"Main Sequence (K)",
    100:"Main Sequence (M)",
}

export const Normal_Solar_Luminosity = 3.828 * Math.pow(10,26);
export const Normal_Solar_Radius = 6.957 * Math.pow(10,8);
export const Normal_Solar_Mass = 1.9885 * Math.pow(10,30);

export const Star_Info= {
    "Main Sequence (O)": {
        Solar_Mass :  {max: 100, min: 35},
        Solar_Radius : {max: 12, min: 9.8},
        color : {max: 50000, min: 38000},
        habitable: {min: 32565,max: 99018},
    },
    "Main Sequence (B)": {
        Solar_Mass : {max: 18, min: 6.5},
        Solar_Radius : {max: 7.4, min: 3.8},
        color : {max: 30000, min: 16400},
        habitable: {min: 3731, max: 41133},
    },
    "Main Sequence (A)": {
        Solar_Mass : {max: 3.2, min: 2.1},
        Solar_Radius : {max: 2.5, min: 1.7},
        color : {max: 10800, min: 8620},
        habitable: {min: 1357, max: 4948},
    },
    "Main Sequence (F)": {
        Solar_Mass : {max: 1.7, min: 1.3},
        Solar_Radius : {max:1.3 , min: 1.2},
        color : {max: 7240, min: 6540},
        habitable: {min: 607, max: 1890},
    },
    "Main Sequence (G)": {
        Solar_Mass : {max: 1.1, min: 0.93},
        Solar_Radius : {max: 1.05, min: .93},
        color : {max: 5920, min: 5610},
        habitable: {min: 351, max: 872.9},
    },
    "Main Sequence (K)": {
        Solar_Mass : {max: .78, min: 0.69},
        Solar_Radius : {max: .85, min: .74},
        color : {max: 5240, min: 4410},
        habitable: {min: 107, max: 480},
    },
    "Main Sequence (M)": {
        Solar_Mass : {max: 0.6, min: 0.08},
        Solar_Radius : {max: .51, min: .11},
        color : {max: 3800, min: 3120},
        habitable: {min: 0.51, max: 200.85}
    },
    "Red Giant": {
        Solar_Mass : {max: 8.0, min: 0.25},
        Solar_Radius : {max: 100, min: 20},
        color : {max: 2650, min: 2200},
        habitable: {min: 0, max: 0},
    },
    "White Dwarf": {
        Solar_Mass : {max: 0.7, min: 0.5},
        Solar_Radius : {max: 0.08, min: 0.02},
        color : {max: 30000, min: 7420},
        habitable: {min: 0, max: 0},
    },
    "Red Dwarf": {
        Solar_Mass : {max: 0.6, min: 0.08},
        Solar_Radius : {max: 0.12, min: 0.09},
        color : {max: 3500, min: 2000},
        habitable: {min: 0, max: 0},
    },
    "Neutron": {
        Solar_Mass : {max: 25, min: 10},
        Solar_Radius : {max: 0.00000000025, min: 0.00000000001},
        color : {max: 10000000, min: 1000000},
        habitable: {min: 0, max: 0},
    },
    "Super Giant": {
        Solar_Mass : {max: 70, min: 10},
        Solar_Radius : {max: 750, min: 30},
        color : {max: 20000, min: 3450},
        habitable: {min: 0, max: 0},
    },
}