function matchTickets(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let ticketType = arg2;
    let fansCount = Number(arg3);

    let priceOneTicketVIP = 499.99;
    let priceOneTicketNormal = 249.99;

    if (fansCount >= 1 && fansCount <= 4) {
        budget *= 0.25;
    } else if (fansCount >= 5 && fansCount <= 9) {
        budget *= 0.40;
    } else if (fansCount >= 10 && fansCount <= 24) {
        budget *= 0.50;
    } else if (fansCount >= 25 && fansCount <= 49) {
        budget *= 0.60;
    } else {
        budget *= 0.75;
    }

    let ticketsPrice = 0;

    if (ticketType == "Normal") {
        ticketsPrice = priceOneTicketNormal * fansCount;
    } else {
        ticketsPrice = priceOneTicketVIP * fansCount; 
    }

    let difference = Math.abs(ticketsPrice - budget);
    
    if (budget >= ticketsPrice) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }
}

matchTickets(30000, "VIP", 49);