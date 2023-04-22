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
    it('should have 100% atmosphere makeup', function () {
        let total = 0;
        for (let i = 0; i < planet.atmosphere_makeup.length; i++) {
            total += planet.atmosphere_makeup[i].percent;
        }
        expect(total).to.be.eql(100);
    });
    it('should have 100% terrain makeup', function () {
        let total = 0;
        for (let i = 0; i < planet.terrain.length; i++) {
            total += planet.terrain[i].percent;
        }
        if (planet.type !== "Gas Planet") {
            expect(total, planet.type).to.be.eql(100);
        }
    });
});