function movieProfit(input) {
    let movieName = input[0];
    let daysCount = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentForCinema = Number(input[4]);

    let ticketPriceForDay = ticketsCount * ticketPrice;
    let totalIncome = ticketPriceForDay * daysCount;

    percentForCinema = (totalIncome * percentForCinema) / 100;

    let incomeMovie = totalIncome - percentForCinema;

    console.log(`The profit from the movie ${movieName} is ${incomeMovie.toFixed(2)} lv.`);
}

movieProfit([ 'The Programmer', '20', '500', '7.50', '7', '' ]);