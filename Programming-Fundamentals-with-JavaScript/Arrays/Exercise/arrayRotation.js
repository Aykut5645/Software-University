function solve(arr, rotations) {
    let result = 0;

    for (let i = 0; i < rotations; i++) {
        result = arr.shift();
        arr.push(result);
    }
    
    console.log(arr.join(' '));
}

solve([2, 4, 15, 31], 5);