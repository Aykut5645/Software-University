class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(num) {
        this.innerLength += num;
    }

    decrease(num) {
        num >= this.innerLength
            ? this.innerLength = 0
            : this.innerLength -= num;

        this.innerString = this.innerString
            .replace(this.innerString.slice(this.innerLength), '...');
    }

    toString() {
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(2);
console.log(test.toString()); // Test