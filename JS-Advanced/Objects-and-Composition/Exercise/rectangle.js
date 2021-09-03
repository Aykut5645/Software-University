function foo(width, height, color) {
    return {
        width,
        height,
        color: capitalize(color),
        calcArea,
    }

    function capitalize(input) {
        return input[0].toLocaleUpperCase() + input.substring(1);
    }

    function calcArea() {
        return this.height * this.width;
    }
}

let rect = foo(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());