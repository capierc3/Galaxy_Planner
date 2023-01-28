import {expect} from "chai";
import {dice} from "../../src/utils/dice.js"

let diceMax = [4,6,10,12,20,100]

describe("dice test", function () {
    for (let i = 0; i < 6; i++) {
        describe("d" + diceMax[i] + " test", function () {
            it('is between 0 and ' + diceMax[i], function () {
                for (let j = 0; j < 50; j++) {
                    let diceArr = [dice.rollD4(), dice.rollD6(), dice.rollD10(), dice.rollD12(), dice.rollD20(), dice.rollPercent()]
                    expect(diceArr[i]).to.be.gt(0);
                    expect(diceArr[i]).to.be.lt(diceMax[i] + 1);
                }
            });
        });
    }
});

describe("test dice.rollCustom", function () {
    it('should be between 4 and 13', function () {
        for (let i = 0; i < 50; i++) {
            expect(dice.rollCustom(4,13)).to.be.gt(3);
            expect(dice.rollCustom(4,13)).to.be.lt(14);
        }
    });
    it('should be between -43 and 3', function () {
        for (let i = 0; i < 50; i++) {
            expect(dice.rollCustom(-43,3)).to.be.gt(-44);
            expect(dice.rollCustom(-43,3)).to.be.lt(4);
        }
    });
});

describe("test dice.rollCustomFrac", function () {
    it('should be between .05 and .75', function () {
        for (let i = 0; i < 50; i++) {
            expect(dice.rollCustomFrac(.05,.75)).to.be.gt(.049);
            expect(dice.rollCustomFrac(.05,.75)).to.be.lt(.751);
        }
    });
});