function solve(input) {
    let index = 0;
    let currentNumber = Number(input[index]);
    index++;

    while (currentNumber < 1 || currentNumber > 100) {
        console.log ("Invalid number!");

        currentNumber = Number(input[index]);
        index++;
    }
    
    console.log(`The number is: ${currentNumber}`); 
}

solve(["105", "0", "-200", "77"]);