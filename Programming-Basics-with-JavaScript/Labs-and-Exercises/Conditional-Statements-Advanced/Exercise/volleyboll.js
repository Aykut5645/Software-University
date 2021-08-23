function volleyball(arg1, arg2, arg3) {
    let yearType = arg1;
    let holidayCount = Number(arg2);
    let weekendCountHome = Number(arg3);

    let yearWeekends = 48;

    let weekendsInSofia = yearWeekends - weekendCountHome;
    let saturdayGameSofia = weekendsInSofia * 3/4;
    let holidayGameSofia = holidayCount * 2/3;

    let totalGames = saturdayGameSofia + holidayGameSofia + weekendCountHome;

    if (yearType == "leap") {
        let еxtraGames = totalGames *  0.15;
        totalGames += еxtraGames;
        console.log(Math.floor(totalGames));
    } else {
        console.log(Math.floor(totalGames));
    }
} 

volleyball("normal", 6, 13);