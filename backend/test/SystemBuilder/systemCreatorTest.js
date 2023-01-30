import {newSystem} from "../../src/SystemBuilder/systemCreator.js";
import {expect} from "chai";

describe("Solar System Test", function () {
   let solarSystem = newSystem();
    it("should have at least one star but no more than 3", function () {
       expect(solarSystem.stars.length).to.be.gte(1);
       expect(solarSystem.stars.length).to.be.lte(3);
   });
    it('should have values for its habitable zone ', function () {
        expect(solarSystem.habitable_zone.min).to.exist;
        expect(solarSystem.habitable_zone.max).to.exist;
    });
    console.log(solarSystem);
});