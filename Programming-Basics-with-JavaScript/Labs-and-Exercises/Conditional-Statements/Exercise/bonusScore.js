function bonusScore(arg1, arg2) {
    let score = Number(arg1);
    let bonus = 0;

    if (score <= 100) {
        bonus = 5;
    } else if (score <= 1000) {
        bonus = 20 * 1/100 * score;
    } else if (score > 1000) {
        bonus = 10 * 1/100 * score;
    }

    if (score % 2 == 0) {
        bonus = bonus + 1;
    } else if (score % 10 == 5) {
        bonus = bonus + 2;
    }
        console.log(bonus);
        console.log(score + bonus);
}


bonusScore("2703");