let { assert } = require('chai');
let subSum = require('./subSum');

describe('Subsum lab task', function () {
    it('Subsum is a function', function () {
        assert.typeOf(subSum, 'function')
    });

    it('Subsum computes [1, 1] => 2', function () {
        assert.equal(subSum([1, 1]), 2);
    });

    it('Subsum computes [1, 1, 1], 1 => 2', function () {
        assert.equal(subSum([1, 1, 1], 1), 2);
    });

    it('Subsum computes [1, 1, 1, 1], 1, 2 => 2', function () {
        assert.equal(subSum([1, 1, 1, 1], 1, 2), 2);
    });

    it('Subsum computes [1, 1], -1, 1 => 2', function () {
        assert.equal(subSum([1, 1], -1, 1), 2);
    });

    it('Subsum computes 1 => NaN', function () {
        assert.isNaN(subSum(1), true);
    });

    // test saturation
    it('Subsum computes [10, 20, 30, 40, 50, 60], 3, 300 => 150', function () {
        assert.equal(subSum([10, 20, 30, 40, 50, 60], 3, 300), 150);
    });
    
    it('Subsum computes [1.1, 2.2, 3.3, 4.4, 5.5], -3, 1 => 3.3000000000000003', function () {
        assert.equal(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1), 3.3000000000000003);
    });
    
    it('Subsum computes [10, twenty, 30, 40], 0, 2 => NaN', function () {
        assert.isNaN(subSum([10, 'twenty', 30, 40], 0, 2), true);
    });
    
    it('Subsum computes [], 1, 2 => 0', function () {
        assert.equal(subSum([], 1, 2), 0);
    });
    
    it('Subsum computes => text, 0, 2', function () {
        assert.isNaN(subSum('text', 0, 2), NaN);
    });
});