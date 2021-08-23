function oscarsWeekInCinema(input) {
    let movieName = input[0];
    let hallType = input[1];
    let peopleCount = Number(input[2]);

    let ticketPrice = 0;

    if (movieName == "A Star Is Born") {

        switch(hallType) {
            case "normal":
                ticketPrice = 7.50;
                break;
            case "luxury":
                ticketPrice = 10.50;
                break;
            case "ultra luxury":
                ticketPrice = 13.50;
                break;
        }
    } else if (movieName == "Bohemian Rhapsody") {

        switch(hallType) {
            case "normal":
                ticketPrice = 7.35;
                break;
            case "luxury":
                ticketPrice = 9.45;
                break;
            case "ultra luxury":
                ticketPrice = 12.75;
                break;
        }
    } else if (movieName == "Green Book") {

        switch(hallType) {
            case "normal":
                ticketPrice = 8.15;
                break;
            case "luxury":
                ticketPrice = 10.25;
                break;
            case "ultra luxury":
                ticketPrice = 13.25;
                break;
        }
    } else if (movieName == "The Favourite") {

        switch(hallType) {
            case "normal":
                ticketPrice = 8.75;
                break;
            case "luxury":
                ticketPrice = 11.55;
                break;
            case "ultra luxury":
                ticketPrice = 13.95;
                break;
        }
    }

    let incomeProjection = ((ticketPrice * peopleCount).toFixed(2));
    
    console.log(`${movieName} -> ${incomeProjection} lv.`);
}

oscarsWeekInCinema([ 'A Star Is Born', 'luxury', '42' ]);