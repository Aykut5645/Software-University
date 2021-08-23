function schoolCamp(arg1, arg2, arg3, arg4) {
    let seasonType = arg1;
    let groupType = arg2;
    let scholarCount = Number(arg3);
    let nightCount = Number(arg4);

    let price = 0;
    let sportType = 0;

    if (groupType == "boys" || groupType == "girls") {

        switch (seasonType) {
            case "Winter":
                price = 9.60;
                break;
            case "Spring":
                price = 7.20;
                break;
            case "Summer":
                price = 15;
                break;
        }
    } else if (groupType == "mixed") {

        switch (seasonType) {
            case "Winter":
                price = 10;
                break;
            case "Spring":
                price = 9.50;
                break;
            case "Summer":
                price = 20;
                break;
        }
    }

    if (seasonType == "Winter") {

        switch (groupType) {
            case "girls":
                sportType = "Gymnastics";
                break;
            case "boys":
                sportType = "Judo";
                break;
            case "mixed":
                sportType = "Ski";
                break;
        }
    } else if (seasonType == "Spring") {

        switch (groupType) {
            case "girls":
                sportType = "Athletics";
                break;
            case "boys":
                sportType = "Tennis";
                break;
            case "mixed":
                sportType = "Cycling";
                break;
        }
    } else if (seasonType == "Summer") {

        switch (groupType) {
            case "girls":
                sportType = "Volleyball";
                break;
            case "boys":
                sportType = "Football";
                break;
            case "mixed":
                sportType = "Swimming";
                break;
        }
    }
    
    let vacationPrice = price * scholarCount * nightCount;

    if (scholarCount >= 50) {
        vacationPrice *= 0.50;
    } else if (scholarCount >= 20 && scholarCount < 50) {
        vacationPrice *= 0.85;
    } else if (scholarCount >= 10 && scholarCount < 20) {
        vacationPrice *= 0.95;
    }

    console.log(`${sportType} ${vacationPrice.toFixed(2)} lv.`);
}

schoolCamp("Spring", "mixed", "17", "14");