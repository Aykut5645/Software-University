function solve(arg) {
    let maxCount = Number(arg);

    let firstNumber = 0;
    let secondNumber = 0;
    let thirdNumber = 0;
    let fourthNumber = 0;   
    let firstNumberPercent = 0;
    let secondNumberPercent = 0;
    let thirdNumberPercent = 0;
    let fourthNumberPercent = 0;  

    for (let i = 1; i <= maxCount; i++) {
        let currentNumber = i;

        if (currentNumber < 10 && currentNumber % 2 == 1) {
            firstNumber++;
            firstNumberPercent = firstNumber / maxCount * 100;
        }   

        if (currentNumber % 2 == 0) {
            secondNumber++;
            secondNumberPercent = secondNumber / maxCount * 100;
        }   
        
        if (currentNumber % 10 == 5) {
            thirdNumber++;
            thirdNumberPercent = thirdNumber / maxCount * 100;
        }   
        
        if (100 % currentNumber == 0) {
          fourthNumber++;
          fourthNumberPercent = fourthNumber / maxCount * 100;
      }
  }

  console.log(`${firstNumberPercent.toFixed(2)}%`);
  console.log(`${secondNumberPercent.toFixed(2)}%`);
  console.log(`${thirdNumberPercent.toFixed(2)}%`);
  console.log(`${fourthNumberPercent.toFixed(2)}%`);
}

solve(49);