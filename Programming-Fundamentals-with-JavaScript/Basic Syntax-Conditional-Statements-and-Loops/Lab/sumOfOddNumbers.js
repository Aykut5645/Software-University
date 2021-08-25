function solve(input) {
    let n = input;
    let num = 1;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        
        if (i > n) {
            break;
        }

        console.log(num);
        sum += num;
        num += 2;
    }

    console.log(`Sum: ${sum}`);
}

solve(3);