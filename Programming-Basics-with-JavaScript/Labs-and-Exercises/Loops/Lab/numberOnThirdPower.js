function numberOnThirdPower(arg) {
    let num = Number(arg);

    let A = 0;
    let B = 0;

    if (num % 2 == 1) {

        for (let i = 1; i <= num; i++) {

            if (i % 2 == 1) {
                    A = i;
                    B = Math.pow(A, 3);
                    console.log(`Current number: ${i}. Cube: ${B}`);
            }
        }
    } else {

        for (let i = 1; i <= num; i++) {

            if (i % 2 == 0) {
                    A = i;
                    B = Math.pow(A, 3);
                    console.log(`Current number: ${i}. Cube: ${B}`);
            }
        }
    }
}

numberOnThirdPower(6);