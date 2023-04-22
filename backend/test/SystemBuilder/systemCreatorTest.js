import {newSystem, addStar} from "../../src/SystemBuilder/systemCreator.js";
import {expect} from "chai";

describe("Solar System Test", function () {
   let solarSystem = newSystem();
    it("should have at least one star but no more than 3", function () {
       expect(solarSystem.stars.length).to.be.gte(1);
       expect(solarSystem.stars.length).to.be.lte(3);
    });
    console.log("%j",solarSystem);
});

describe("getStar function test", function () {
   it("should create a star equal in value", function () {
       let star = getStar();
       expect(star.type === "Main Sequence (G)");
   });
    it("should create a star lower in value", function () {
        let star = getStar();
        expect(star.type === "Main Sequence (K)");
    });
    it("should create a star higher in value", function () {
        let star = getStar();
        expect(star.type === "Main Sequence (F)");
    });
});