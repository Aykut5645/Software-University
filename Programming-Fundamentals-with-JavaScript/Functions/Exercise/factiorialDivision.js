function factorialDivision(firstNum, secondNum) {

    let finalResult = factorialFirstNum(firstNum) / factorialSecondNum(secondNum);
    console.log(finalResult.toFixed(2));

    function factorialFirstNum(num) {
        let firstResult = 0;

        for (let i = num - 1; i > 0; i--) {
            num *= i;
            firstResult = num;
        }

        if (num == 0 || num == 1) {
            return 1;
        } else {
            return firstResult;
        }
    }

    function factorialSecondNum(num) {
        let secondResult = 0;

        for (let j = num - 1; j > 0; j--) {
            num *= j;
            secondResult = num;
        }

        if (num == 0 || num == 1) {
            return 1;
        } else {
            return secondResult;
        }
    }
}

factorialDivision(1, 2);
factorialDivision(6, 2);


