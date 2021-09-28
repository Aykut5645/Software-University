let { assert } = require('chai');
let sum = require('./sumOfNumbes');

describe('Sum all parameters in array', function () {
    it('Sum [1, 1] => 2', function () {
        assert.equal(sum([1, 1]), 2);
    });
});