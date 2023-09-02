import {expect} from "chai";
import {shuffle} from "../../src/utils/arrayUtils.js";


describe("Array Shuffle Test", function () {
    let array1 = [0,1,2,3,4,5,6,7,8,9];
    let array2 = [0,1,2,3,4,5,6,7,8,9];
    shuffle(array1);
    it('should not be equal to the copy array', function () {
        let is_same = array1.every(function(element, index) {
            return element === array2[index];
        });
        expect(is_same).to.be.false;
    });
});