function foo(fruitType, weight, price) {
    return `I need $${(weight * 0.001 * price).toFixed(2)} to buy ${(weight * 0.001).toFixed(2)} kilograms ${fruitType}.`;
}

console.log(
    foo('orange', 2500, 1.80)
);