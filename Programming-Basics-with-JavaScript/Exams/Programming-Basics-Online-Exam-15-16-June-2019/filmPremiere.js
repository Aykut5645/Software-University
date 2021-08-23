function filmPremiere(input) {
    let movie = input[0];
    let package = input[1];
    let ticketsCount = Number(input[2]);
    
    let currentPrice = 0;

    if (movie == "John Wick") {

        switch (package) {
            case "Drink":
                currentPrice = 12;
                break;
            case "Popcorn":
                currentPrice = 15;
                break;
            case "Menu":
                currentPrice = 19;
                break;
        }
    } else if (movie == "Star Wars") {

        switch (package) {
            case "Drink":
                currentPrice = 18;
                break;
            case "Popcorn":
                currentPrice = 25;
                break;
            case "Menu":
                currentPrice = 30;
                break;
        }
    } else if (movie == "Jumanji") {

        switch (package) {
            case "Drink":
                currentPrice = 9;
                break;
            case "Popcorn":
                currentPrice = 11;
                break;
            case "Menu":
                currentPrice = 14;
                break;
        }
    }

    let ticketsPrice = ticketsCount * currentPrice;
    
    if (movie == "Star Wars" && ticketsCount >= 4) {
        ticketsPrice = ticketsPrice - (ticketsPrice * 0.3);
        
    }

    if (movie == "Jumanji" && ticketsCount == 2) {
        ticketsPrice = ticketsPrice - (ticketsPrice * 0.15);
    }

    console.log(`Your bill is ${ticketsPrice.toFixed(2)} leva.`);
}

filmPremiere([ 'Jumanji', 'Menu', '2' ]);