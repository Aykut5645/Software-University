let { assert } = require('chai');
let dealership = require('./dealerShip');

describe('dealership', function () {
    describe('newCarCost', function () {
        it('If oldcar exist', function () {
            assert.equal(dealership.newCarCost('Audi A4 B8', 20000), 5000);
        });
        it('oldar no exist', function () {
            assert.equal(dealership.newCarCost('Audi A5 B8', 20000), 20000);
        });
    });
    
    describe('carEquipment', function () {
        it('return extras', function () {
            assert.deepEqual(dealership.carEquipment(['a'], [0, 2]), ['a', 'c']);
        });
    });

    describe('euroCategory', function () {
        it('low category', function () {
            // assert.equal(dealership.euroCategory(1), 'Your euro category is low, so there is no discount from the final price!');
            assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!');
        });

        it('high category', function () {
            assert.equal(dealership.euroCategory(4), 'We have added 5% discount to the final price: 14250.');
            assert.equal(dealership.euroCategory(5), 'We have added 5% discount to the final price: 14250.');
        });
    });
});