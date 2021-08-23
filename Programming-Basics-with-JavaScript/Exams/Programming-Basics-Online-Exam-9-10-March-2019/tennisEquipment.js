function tennisEquipment(input) {
    let tennisRacket = Number(input[0]);
    let tennisRacketCount = Number(input[1]);
    let sneakersCount = Number(input[2]);

    let tennisRacketsPrice = tennisRacket * tennisRacketCount;
    let sneakersPrice = (tennisRacket * 1 / 6) * sneakersCount;
    
    let anotherEquipmentPrice = (tennisRacketsPrice + sneakersPrice) * 0.2;
    let totalPrice = tennisRacketsPrice + sneakersPrice + anotherEquipmentPrice;
    
    let forNole = totalPrice * 1/8;
    let forSponsors = totalPrice * 7/8;

    forNole = Math.floor(forNole);
    console.log(`Price to be paid by Djokovic ${forNole}`);

    forSponsors = Math.ceil(forSponsors);
    console.log(`Price to be paid by sponsors ${forSponsors}`);
}

tennisEquipment(['850', '4', '2', '']);