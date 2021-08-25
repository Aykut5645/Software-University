function solve(input) {
    let numAsStr = input.toString();
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]);
        
    }

    console.log(sum);
}

solve(543);