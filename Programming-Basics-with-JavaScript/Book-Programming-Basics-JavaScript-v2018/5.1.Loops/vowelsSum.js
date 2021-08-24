function vowelsSum([arg]) {
    let letter = arg.length;
    let sum = 0;

    for (let i = 0; i < letter; i++) {
        let currentLetter = arg[i];

        if (currentLetter == "a") {
            sum++;
        } else if (currentLetter == "e") {
            sum += 2;
        } else if (currentLetter == "i") {
            sum += 3;
        } else if (currentLetter == "o") {
            sum += 4;
        } else if (currentLetter == "u") {
            sum += 5;
        }
    }

    console.log(sum);
}

vowelsSum(["bamboo"]);