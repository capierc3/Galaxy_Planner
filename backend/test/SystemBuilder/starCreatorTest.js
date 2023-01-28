import {expect} from "chai";
import * as starCreator from "../../src/SystemBuilder/starCreator.js";
import {Star_Types} from "../../src/SystemBuilder/starEnums.js";

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
});

//NEED TESTS TO CHECK RANGES!
