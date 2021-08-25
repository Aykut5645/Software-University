function solve(input1, input2) {
    let arr = input1;
    let num = input2;
    let sum = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1 + i; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            
            if (sum == num) {
                result.push(arr[i], arr[j]);
                console.log(result.join(' '));
                sum = 0;
                result = [];
            }
        } 
    }
}

solve([1, 2, 3, 4, 5, 6], 6);