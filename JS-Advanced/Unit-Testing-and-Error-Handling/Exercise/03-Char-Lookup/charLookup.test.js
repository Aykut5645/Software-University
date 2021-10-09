let { assert } = require('chai');
let lookupChar = require('./charLookup');

describe('function returns index value from a given string', function () {
    it('first parameter is not a string', function () {
        assert.equal(lookupChar(1, 0), undefined);
    });

    it('second parameter is not a number', function () {
        assert.equal(lookupChar('1', '0'), undefined);
        assert.equal(lookupChar('1', 1.1), undefined);
    });

    it('second parameter have incorrect length', function () {
        assert.equal(lookupChar('1', -1), 'Incorrect index');
        assert.equal(lookupChar('1', 1), 'Incorrect index');
    });

    it('return the character at the specified index', function () {
        assert.equal(lookupChar('1', 0), '1');
        assert.equal(lookupChar('12', 1), '2');
        assert.equal(lookupChar('123', 1), '2');
    });
});