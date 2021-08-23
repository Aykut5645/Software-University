function hotelRoom(arg1, arg2) {
    let month = arg1;
    let nightCount = Number(arg2);

    let studioPriceOneNight = 0;
    let apartmentPriceOneNight = 0;

    switch (month) {
        case "May":
        case "October":
            studioPriceOneNight = 50;
            apartmentPriceOneNight = 65;

            if (nightCount > 14 && (month == "May" || month == "October")) {
                studioPriceOneNight *= 0.70; 
            } else if (nightCount > 7 && (month == "May" || month == "October")) {
                studioPriceOneNight *= 0.95;
            }
            break;

        case "June":
        case "September":
            studioPriceOneNight = 75.20;
            apartmentPriceOneNight = 68.70;
            
            if (nightCount > 14 && (month == "June" || month == "September")) {
                studioPriceOneNight *= 0.80;
            }
            break;

        case "July":
        case "August":
            studioPriceOneNight = 76;
            apartmentPriceOneNight = 77;
            break;
    }       

    if (nightCount > 14 && (month == "May" || month == "October" || month == "June" 
        || month == "September" || month == "July" || month == "August")) {
            apartmentPriceOneNight *= 0.90; 
    }

    let finalStudioPrice = studioPriceOneNight * nightCount;
    let finalApartmentPrice = apartmentPriceOneNight * nightCount;

    console.log(`Apartment: ${finalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${finalStudioPrice.toFixed(2)} lv.`);
}

hotelRoom("August", 20);