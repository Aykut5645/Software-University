function summerOutfit(arg1, arg2) {
    let degrees = Number(arg1);
    let partOfDay = arg2.toLowerCase();

    let outfit = 0;
    let shoes = 0;

    if (degrees >= 10 && degrees <= 18) {

        switch (partOfDay) {
            case "morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "afternoon":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "evening":
                outfit = "Shirt";
               shoes = "Moccasins";
               break;
        }   
    } else if (degrees > 18 && degrees <= 24) {

        switch (partOfDay) {
            case "morning":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "evening":
                outfit = "Shirt";
                shoes = "Moccasins";
              break;
        }
    } else if (degrees >= 25) {

        switch (partOfDay) {
            case "morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "evening":
                outfit = "Shirt";
               shoes = "Moccasins";
               break;
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}

summerOutfit(28, "evening");