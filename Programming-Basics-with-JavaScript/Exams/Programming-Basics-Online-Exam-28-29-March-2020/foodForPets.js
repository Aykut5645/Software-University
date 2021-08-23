function foodForPets(input) {
    let index = 0;
    let dayCount = Number(input[index]);
    index++;

    let totalFood = Number(input[index]);
    index++;

    let dogEat = 0;
    let catEat = 0;
    let biscuits = 0;

    for (let i = 1; i <= dayCount; i++) {
        let amountDogEat = Number(input[index]);
        index++;
        let amountCatEat = Number(input[index]);
        index++;

        if (i % 3 == 0) {
            let currentBiscuits = (amountCatEat + amountDogEat) * 0.1;
            biscuits += currentBiscuits;
        }

        dogEat += amountDogEat;
        catEat += amountCatEat;
    }

    let totalEat = dogEat + catEat;
    let totalEatPercent = (totalEat / totalFood) * 100;
    let dogEatPercent = (dogEat / totalEat) * 100;
    let catEatPrcent = (catEat / totalEat) * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${totalEatPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogEatPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catEatPrcent.toFixed(2)}% eaten from the cat.`);
}

foodForPets([
    '3',   '1000',
    '300', '20',
    '100', '30',
    '110', '40'
  ]);