function solve(arr) {
    let firstElement = Number(arr[0]);
    let secondElement = Number(arr[arr.length - 1]);

    let result = firstElement + secondElement;

    console.log(result);
}

solve(['20', '30', '40']);



function solve(arr) {
    let firstElement = Number(arr.shift());
    let lastElement =  Number(arr.pop());

    let result = firstElement + lastElement;

    return result;
}

console.log(solve(['20', '30', '40']));