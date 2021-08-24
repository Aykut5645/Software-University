function enterEvenNumber(input) {
    let index = 0;
    let inputData = input[index];
    index++;

    while (inputData != undefined) {
        inputData = Number(inputData);

        if (inputData % 2 == 0) {
            console.log(`Even number entered: ${inputData}`);
        } else {
            console.log("Invalid number!");

        }

        inputData = input[index];
        index++;
    }
}

enterEvenNumber(["12,85"]);