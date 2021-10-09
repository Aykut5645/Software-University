let { assert } = require('chai');
let mathenEnforcer = require('./mathEnforcer');

describe('MathEnforcer', function () {
    describe('Method addFive functionality', function () {
        it('parameter is not a number', function () {
            assert.equal(mathenEnforcer.addFive('1'), undefined);
        });

        it('sums parameter with 5', function () {
            assert.equal(mathenEnforcer.addFive(1), 6);
            assert.equal(mathenEnforcer.addFive(1.1), 6.1);
            assert.equal(mathenEnforcer.addFive(-1), 4);
        });
    });

    describe('Method subtractTen functionality', function () {
        it('parameter is not a number', function () {
            assert.equal(mathenEnforcer.subtractTen('1'), undefined);
        });

        it('subtracts of the parameter - 10', function () {
            assert.equal(mathenEnforcer.subtractTen(11), 1);
            assert.equal(mathenEnforcer.subtractTen(1), -9);
            assert.equal(mathenEnforcer.subtractTen(-10), -20);
            assert.equal(mathenEnforcer.subtractTen(10.1), 0.09999999999999964);
        });
    });

    describe('Method sum functionality', function () {
        it('the parameters are not numbers', function () {
            assert.equal(mathenEnforcer.sum('1', 1), undefined);
            assert.equal(mathenEnforcer.sum(1, '1'), undefined);
        });

        it('sums the parameters', function () {
            assert.equal(mathenEnforcer.sum(1, 1), 2);
            assert.equal(mathenEnforcer.sum(-1, -1), -2);
            assert.equal(mathenEnforcer.sum(1.1, 0.1), 1.2000000000000002);
        });
    });
});