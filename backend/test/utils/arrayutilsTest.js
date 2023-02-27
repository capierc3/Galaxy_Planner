import {expect} from "chai";
import {shuffle} from "../../src/utils/arrayUtils.js";


describe("Array Shuffle Test", function () {
    let array = [0,1,2,3,4,5,6,7,8,9];
    shuffle(array);
    it('should move an item to another position (limit 3)', function () {
        let samePOS = 0;
        for (let i = 0; i < array.length; i++) {
            if (i === array[i]) samePOS++;
        }
        expect(samePOS).to.be.lt(3);
    });
    it('should have a new zero element', function () {
        expect(array[0]).to.not.eql(0);
    });
});