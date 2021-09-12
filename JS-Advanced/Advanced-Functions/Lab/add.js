solution = (initialNum) => (num) => initialNum + num;

// function solution(initialNum) {
//     return function(num) {
//         return initialNum + num;
//     }
// }

// solution = (initialNum) => {
//     return (num) => {
//         return initialNum + num;
//     }
// }

let add5 = solution(5);

console.log(add5(2));
console.log(add5(3));