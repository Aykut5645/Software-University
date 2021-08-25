function solve(input1, input2) {
    let num = input1;
    let pow = input2;

    let result = Math.pow(num, pow);
    //let result = num ** pow;
    //for (let i = 1; i <= pow; i++) {
    //    (the result must be 1)     
    //    result *= num;
    //    
    //}
    console.log(result);
}

solve(2, 8);
solve(3, 4);