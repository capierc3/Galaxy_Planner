import {Planet_Sizes, Planet_Types, planetJson} from "../../src/SystemBuilder/planetEnums.js";
import {dice} from "../../src/utils/dice.js";
import {expect} from "chai";
import {newPlanet} from "../../src/SystemBuilder/planetCreator.js";

describe("Planets properties are populated", function () {
    let planet = newPlanet();
    it('should have a type', function () {
        expect(planet.type).is.not.null;
        expect(planet.type).is.not.eql("");
    });
    it('should have a size set', function () {
        expect(planet.size).is.not.null;
        expect(planet.size).is.not.eql("");
        expect(planet.circumference).is.not.null;
        expect(planet.circumference).is.not.eql("");
    });
});