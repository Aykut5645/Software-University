function checkPrime(input) {
    let number = Number(input[0]);

    let notPrime = false;

    if (number < 2) {
        notPrime = true;
    }

    for(let i = 2; i <= Math.sqrt(number); i++) {

        if(number % i == 0) {
            notPrime = true;
        }
    }
    
    if (notPrime) {
        console.log("Not Prime");
    } else {
        console.log("Prime");
    }
}

checkPrime(["5"]);