function solve(input) {
    let firstNumbMax = Number(input[0]);
    let secondNumbMax = Number(input[1]);
    let thirdNumbMax = Number(input[2]);

    let i = 2;
    let j = 2;
    let k = 2;

    for (let i = 2; i <= firstNumbMax; i += 2) {
        
        for (let j = 2; j <= secondNumbMax; j++) {

            for (let k = 2; k <= thirdNumbMax; k += 2) {

                if ((i % 2 == 0 && k % 2 == 0) && (j == 2 || j == 3 || j == 5 || j == 7)) {
                    
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}

solve([ '8', '2', '8', '' ]);