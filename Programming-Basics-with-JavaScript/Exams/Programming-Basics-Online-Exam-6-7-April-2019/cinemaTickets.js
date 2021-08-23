function cinemaTickets(input) {
    let index = 0;
    let movieName = input[index];
    index++;

    let totalStudentCount = 0;
    let totalStandardCount = 0;
    let totalKidCount = 0;

    let totalTicketCount = 0;

    while (movieName != "Finish") {
        let freeSeats = Number(input[index]);
        index++;
        let currentTicketType = input[index];
        index++;

        let studentTicketCount = 0;
        let standardTicketCount = 0;
        let kidTicketCount = 0;

        let currentTotalTicketCount = 0;

        while (currentTicketType != "End") {

            if (currentTicketType == "standard") {
                standardTicketCount++;
            } else if (currentTicketType == "student") {
                studentTicketCount++;
            } else if (currentTicketType == "kid") {
                kidTicketCount++;
            }

            if ((standardTicketCount + studentTicketCount + kidTicketCount) == freeSeats) {
                break;
            }

            currentTicketType = input[index];
            index++;
        }

        totalStudentCount += studentTicketCount;
        totalStandardCount += standardTicketCount;
        totalKidCount += kidTicketCount;

        currentTotalTicketCount = standardTicketCount + studentTicketCount + kidTicketCount;
        let currentPercent = (currentTotalTicketCount / freeSeats) * 100;
        console.log(`${movieName} - ${currentPercent.toFixed(2)}% full.`);

        totalTicketCount += standardTicketCount + studentTicketCount + kidTicketCount;

        movieName = input[index];
        index++;
    }

    let totalStudentPercent = (totalStudentCount / totalTicketCount) * 100;
    let totalStandardPercent = (totalStandardCount / totalTicketCount) * 100;
    let totalKidPercent = (totalKidCount / totalTicketCount) * 100;

    console.log(`Total tickets: ${totalTicketCount}`);
    console.log(`${totalStudentPercent.toFixed(2)}% student tickets.`)
    console.log(`${totalStandardPercent.toFixed(2)}% standard tickets.`)
    console.log(`${totalKidPercent.toFixed(2)}% kids tickets.`)
}

cinemaTickets([
    'Taxi', '10',
    'standard', 'kid',
    'student', 'student',
    'standard', 'standard',
    'End', 'Scary Movie',
    '6', 'student',
    'student', 'student',
    'student', 'student',
    'student', 'Finish'
]);