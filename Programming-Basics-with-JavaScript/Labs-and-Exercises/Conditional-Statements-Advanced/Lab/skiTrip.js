function skiTrip(arg1, arg2, arg3) {
    let days = Number(arg1);
    let roomType = arg2;
    let opinion = arg3;

    let roomForOnePersonPrice = 18.00;
    let apartmentPrice = 25.00;
    let presidentApartmentPrice = 35.00;

    let nights = days - 1;
    let priceForRooms = 0;

    if (roomType == "room for one person") {
        priceForRooms = nights * roomForOnePersonPrice;
    } else if (roomType == "apartment") {
        priceForRooms = nights * apartmentPrice;
    } else if (roomType == "president apartment") {
        priceForRooms = nights * presidentApartmentPrice;
    }

    if (roomType == "room for one person") {
        if (days < 10) {
            priceForRooms;
        } else if (days <= 15) {
            priceForRooms;
        } else if(days > 15) {
            priceForRooms;
        } 
    }  else if (roomType == "apartment") {
        if (days < 10) {
            priceForRooms *= 0.70; 
        } else if (days <= 15) {
            priceForRooms *= 0.65;
        } else if (days > 15) {
            priceForRooms *= 0.50;
        }
    } else if (roomType == "president apartment") {
        if (days < 10) {
            priceForRooms *= 0.90;
        } else if (days <= 15) {
            priceForRooms *= 0.85;
        } else if (days > 15) {
            priceForRooms *= 0.80;
        }
    } 

    if (opinion == "positive") {
        let baksheesh = priceForRooms * 0.25;
        let finalPrice = priceForRooms + baksheesh;

        console.log(finalPrice.toFixed(2));

    } else if (opinion == "negative") {
        let baksheesh = priceForRooms * 0.1;
        let finalPrice = priceForRooms - baksheesh;
        
        console.log(finalPrice.toFixed(2));
    }
}

skiTrip("30", "president apartment", "negative");