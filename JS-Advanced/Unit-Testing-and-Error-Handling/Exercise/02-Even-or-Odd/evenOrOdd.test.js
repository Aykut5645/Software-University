let { assert } = require('chai');
let isOddOrEven = require('./evenOrOdd');

describe('function returns even or odd result', function () {
    it('input is not a string', function () {
        assert.equal(isOddOrEven(1), undefined);
    });

    it('input have odd length', function () {
        assert.equal(isOddOrEven('1'), 'odd');
    });

    it('input have even length', function () {
        assert.equal(isOddOrEven('12'), 'even');
    });
});