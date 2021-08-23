function cinema(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;

    let oneTicketPrice = 5;
    let totalTicketPrice = 0;
    let totalSeats = 0;

    let currentPeopleCount = input[index];
    index++;

    while (currentPeopleCount != "Movie time!" && currentPeopleCount != undefined) {

        currentPeopleCount = Number(currentPeopleCount);
        totalSeats += currentPeopleCount;

        currentPeopleCount *= oneTicketPrice;


        if (currentPeopleCount % 3 == 0) {
            currentPeopleCount -= oneTicketPrice;
        }

        if (totalSeats > capacity) {
            break;
        }

        totalTicketPrice += currentPeopleCount;

        currentPeopleCount = input[index];
        index++;
    }

    let difference = capacity - totalSeats;

    if (currentPeopleCount == "Movie time!") {
        console.log(`There are ${difference} seats left in the cinema.`);
        console.log(`Cinema income - ${totalTicketPrice} lv.`);
    } else {
        console.log(`The cinema is full.`);
        console.log(`Cinema income - ${totalTicketPrice} lv.`);
    }
}

cinema([ '50', '15', '10', '10', '15', '5' ]);