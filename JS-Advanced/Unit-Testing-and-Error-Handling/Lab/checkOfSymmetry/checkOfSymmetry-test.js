let { assert } = require('chai');
let isSymmetric = require('./checkOfSymmetry');

describe('function checks the symmetry', function() {
    it ('Input: [1] => true', function() {
        assert.equal(isSymmetric([1]), true);
    });

    it ('Input: [1, 2, 1] => true', function() {
        assert.equal(isSymmetric([1, 2, 1]), true);
    });

    it ('Input: [a, a] => true', function() {
        assert.equal(isSymmetric(['a', 'a']), true);
    });

    it ('Input: 1 => false', function() {
        assert.equal(isSymmetric(1), false);
    });

    it ('Input: [1, 2] => false', function() {
        assert.equal(isSymmetric([1, 2]), false);
    });

    it ('Input: [1, "1"] => false', function() {
        assert.equal(isSymmetric([1, '1']), false);
    });
});