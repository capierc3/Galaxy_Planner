import {expect} from "chai";
import * as starCreator from "../../src/SystemBuilder/starCreator.js";
import {Star_Info, Star_Types} from "../../src/SystemBuilder/starEnums.js";
import {newStar} from "../../src/SystemBuilder/starCreator.js";

describe("Star Type Test", function() {
    it ("Random stars should have a type", function () {
        for (let i = 0; i < 20; i++) {
            let star = starCreator.newStar();
            expect(star.type).to.exist
        }
    });
    it('Stars with set types should be the correct type', function () {
        for (let type in Star_Types) {
            let star = starCreator.newTypedStar(Star_Types[type]);
            expect(star).to.exist;
        }
    });
});

describe("Star Mass test", function () {
    it('should have a mass value that is not blank', function () {
        for (let i = 0; i < 10; i++) {
            let star = starCreator.newStar();
            expect(star.mass).to.exist;
            expect(star.mass).to.not.eql("");
        }
        for (let type in Star_Types) {
            let star = starCreator.newTypedStar(Star_Types[type]);
            expect(star.mass).to.exist;
            expect(star.mass).to.not.eql("");
        }
    });
    it('should be within the range of the Star Type', function () {
        for (let type in Star_Types) {
            for (let i = 0; i < 50; i++) {
                let star = starCreator.newTypedStar(Star_Types[type]);
                expect(star.mass).to.be.lte(Star_Info[Star_Types[type]].Solar_Mass.max,)
                expect(star.mass).to.be.gte(Star_Info[Star_Types[type]].Solar_Mass.min)
            }
        }
    });
});

describe("Star Radius test", function () {
    it('should have a radius value that is not blank', function () {
        for (let i = 0; i < 10; i++) {
            let star = starCreator.newStar();
            expect(star.radius).to.exist;
            expect(star.radius).to.not.eql("");
        }
        for (let type in Star_Types) {
            let star = starCreator.newTypedStar(Star_Types[type]);
            expect(star.radius).to.exist;
            expect(star.radius).to.not.eql("");
        }
    });
    it('should be within the range of the Star Type', function () {
        for (let type in Star_Types) {
            for (let i = 0; i < 50; i++) {
                let star = starCreator.newTypedStar(Star_Types[type]);
                expect(star.radius).to.be.lte(Star_Info[Star_Types[type]].Solar_Radius.max)
                expect(star.radius).to.be.gte(Star_Info[Star_Types[type]].Solar_Radius.min)
            }
        }
    });
});

describe("Star Color Temp test", function () {
    it('should have a radius value that is not blank', function () {
        for (let i = 0; i < 10; i++) {
            let star = starCreator.newStar();
            expect(star.temp).to.exist;
            expect(star.temp).to.not.eql("");
        }
        for (let type in Star_Types) {
            let star = starCreator.newTypedStar(Star_Types[type]);
            expect(star.temp).to.exist;
            expect(star.temp).to.not.eql("");
        }
    });
    it('should be within the range of the Star Type', function () {
        for (let type in Star_Types) {
            for (let i = 0; i < 50; i++) {
                let star = starCreator.newTypedStar(Star_Types[type]);
                expect(star.temp).to.be.lte(Star_Info[Star_Types[type]].color.max)
                expect(star.temp).to.be.gte(Star_Info[Star_Types[type]].color.min)
            }
        }
    });
});

describe("Star has a habitable zone", function () {
    it('should have values for its habitable zone ', function () {
        let star = newStar();
        expect(star.habitable_zone.min).to.exist;
        expect(star.habitable_zone.max).to.exist;
    });
});
