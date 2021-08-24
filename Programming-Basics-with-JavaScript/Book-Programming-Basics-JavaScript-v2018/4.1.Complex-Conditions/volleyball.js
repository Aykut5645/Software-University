function volleyball(input) {
    let yearType = input[0];
    let holidayCount = Number(input[1]);
    let weekendCountHome = Number(input[2]);

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