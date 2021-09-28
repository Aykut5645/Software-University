let { assert } = require('chai');
let rgbToHexColor = require('./rgbToHex');

describe('RGB-to-Hex Conversion functionality', function () {
    it('input === (0, 0, 0) => black', function () {
        assert.equal(rgbToHexColor(0, 0, 0), "#000000");
    });

    it('input === (255, 255, 255) => white', function () {
        assert.equal(rgbToHexColor(255, 255, 255), "#FFFFFF");
    });

    it('type of some parameter != number => undefinend', function () {
        assert.equal(rgbToHexColor('1', 1, 1), undefined);
        assert.equal(rgbToHexColor(1, '1', 1), undefined);
        assert.equal(rgbToHexColor(1, 1, '1'), undefined);
    });

    it('some parameter < 0 => undefinend', function () {
        assert.equal(rgbToHexColor(-1, 1, 1), undefined);
        assert.equal(rgbToHexColor(1, -1, 1), undefined);
        assert.equal(rgbToHexColor(1, 1, -1), undefined);
    });

    it('some parameter > 255 => undefinend', function () {
        assert.equal(rgbToHexColor(266, 1, 1), undefined);
        assert.equal(rgbToHexColor(1, 266, 1), undefined);
        assert.equal(rgbToHexColor(1, 1, 266), undefined);
    });

    it('some parameter === 1.1 => undefinend', function () {
        assert.equal(rgbToHexColor(1.1, 1, 1), undefined);
        assert.equal(rgbToHexColor(1, 1.1, 1), undefined);
        assert.equal(rgbToHexColor(1, 1, 1.1), undefined);
    });

    // test saturation
    it('input === (255, 0, 0) => red', function () {
        assert.equal(rgbToHexColor(255, 0, 0), "#FF0000");
    });

    it('input === (0, 255, 0) => green', function () {
        assert.equal(rgbToHexColor(0, 255, 0), "#00FF00");
    });

    it('input === (0, 0, 255) => blue', function () {
        assert.equal(rgbToHexColor(0, 0, 255), "#0000FF");
    });
});