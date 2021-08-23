function sumPrimeNonPrime(input) {
    index = 0;
    let currentInput = input[index];
    index++;

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (currentInput != "stop") {

        currentInput = Number(currentInput);

        let isPrime = true;

        if (currentInput < 0) {
            console.log("Number is negative.");
            currentInput = input[index];
            index++;
            continue;
        }

        for (let i = 2; i < currentInput; i++) {

            if (currentInput % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeSum += currentInput;
        } else {
            nonPrimeSum += currentInput;
        }

        currentInput = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime([ '30', '83', '33', '-1', '20', 'stop' ]);