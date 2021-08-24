function dailyEarnings([arg1, arg2, arg3]) {
    let workDaysInMouth = Number(arg1);
    let winMoneyInDay = Number(arg2);
    let dollarCourseInLv = Number(arg3);

    let bonus = 2.5;

    let mouthSalary = workDaysInMouth * winMoneyInDay;
    let yearSalary = mouthSalary * 12 + mouthSalary * bonus;
    let tax = 25/100 * yearSalary;

    let finalSalary = (yearSalary - tax) * dollarCourseInLv;
    let averageWinInDay = finalSalary / 365;

    console.log(averageWinInDay.toFixed(2));


}

dailyEarnings([21,
    75.00,
    1.59]);