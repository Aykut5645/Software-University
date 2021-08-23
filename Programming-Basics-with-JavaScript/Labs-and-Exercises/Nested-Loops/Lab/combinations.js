function combinations(input) {
    let number = Number(input[0]);
    let count = 0;

    for (let i = 0; i <= number; i++) {

        for (let j = 0; j <= number; j++) {

            for (let k = 0; k <= number; k++) {
                let result = i + j + k;

                if (result == number) {
                    count++;
                }
            }
        }
    }

    console.log(count);
}


combinations([ '25' ]);