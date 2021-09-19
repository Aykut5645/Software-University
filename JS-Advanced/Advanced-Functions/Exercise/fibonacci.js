function getFibonator() {
    let firstNum = 0;
    let secondNum = 1;

    return function () {
        let result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;

        return firstNum;
    }
}

// function getFibonator() {
//     let arr = [0];

//     return function () {
//         if (arr.length === 1) { arr.push(1); return 1; }

//         let currentNum = arr.slice(-2).reduce((acc, x) => acc + x);
//         arr.push(currentNum);

//         return currentNum;
//     }
// }

let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13