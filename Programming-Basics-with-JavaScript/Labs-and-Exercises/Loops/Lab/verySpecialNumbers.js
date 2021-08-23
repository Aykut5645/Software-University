function verySpecialNumbers(arg1, arg2, arg3) {
    let start = Number(arg1);
    let end = Number(arg2);
    let n = Number(arg3);

    result = 0;

    for (let i = start; i <= end; i++) {

        if (i % n !== 0) {
            result = i;
        } else if (i % n == 0) {
            result = `Special number: ${i}`;
        }
        
        if (i % Math.pow(n, 2) == 0) {
            result = `Very special number: ${i} `
        }

        console.log(result);
    }
}

verySpecialNumbers(1, 10, 4);