function bonusScore([arg]) {
    let number = Number(arg);    
    let bonusPoint = 0;
    
    if (number % 2 == 0) {
        bonusPoint = 1;
    } else if (number % 10 == 5) {
        bonusPoint = 2;
    }

    if (number <= 100) {
        bonusPoint = bonusPoint + 5;
        number = number + bonusPoint;
    } else if (number <= 1000) {
        bonusPoint = bonusPoint + (0.2 * number);
        number = number + bonusPoint;
    } else if ( number > 1000) {
        bonusPoint = bonusPoint + (0.1 * number);
        number = number + bonusPoint;
    } 

        console.log(bonusPoint);
        console.log(number);
}

bonusScore(["2703"]);