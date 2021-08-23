function petShop(arg1, arg2) {
    let dogCounts = Number(arg1);
    let animalCounts = Number(arg2);
    dogFoodlv = 2.50;
    animalFoodlv = 4;
    
    let result = (dogCounts * dogFoodlv) + (animalFoodlv * animalCounts);

    console.log(`${result.toFixed(2)} lv.`); 
}

petShop("13", "9");