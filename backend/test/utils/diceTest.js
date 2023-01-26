import {expect} from "chai";
import {dice} from "../../src/utils/dice.js"

describe("d20 test", function () {
   it("is higher than 0", function () {
       for (let i = 0; i < 50; i++) {
           let roll = dice.rollD20();
           expect(roll).to.be.gt(0)
       }
   });
   it("is lower than 21", function () {
       for (let i = 0; i < 50; i++) {
           let roll = dice.rollD20();
           expect(roll).to.be.lt(21)
       }
   });
});

describe("d12 test", function () {
    it("is higher than 0", function () {
        for (let i = 0; i < 50; i++) {
            let roll = dice.rollD12();
            expect(roll).to.be.gt(0)
        }
    });
    it("is lower than 13", function () {
        for (let i = 0; i < 50; i++) {
            let roll = dice.rollD12();
            expect(roll).to.be.lt(13)
        }
    });
});