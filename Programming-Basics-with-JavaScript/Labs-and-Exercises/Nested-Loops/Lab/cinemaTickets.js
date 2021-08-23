function cinemaTickets(input) {
    let index = 0;
    let movie = input[index];
    index++;

    let totalTicketCount = 0;

    let totalStudent = 0;
    let totalStandart = 0;
    let totalKid = 0;

    while (movie != "Finish") {

        let standard = 0;
        let student = 0;
        let kid = 0;
    
        let currentTicketCount = 0;
        let currentTicketPercent = 0;

        let freeSeats = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;

        while (ticketType != "End") {
            
            if (ticketType == "standard") {
                standard++;
            } else if (ticketType == "student") {
                student++;
            } else if (ticketType == "kid"){
                kid++;
            }

            currentTicketCount = standard + student + kid;

            if (currentTicketCount == freeSeats) {
                break;
            }

            ticketType = input[index];
            index++;
        }

        totalTicketCount += currentTicketCount;

        currentTicketPercent = (currentTicketCount / freeSeats) * 100;
        
        console.log(`${movie} - ${currentTicketPercent.toFixed(2)}% full.`);

        movie = input[index];
        index++;  

        totalStandart += standard;
        totalStudent += student;
        totalKid += kid;

        if (movie == "Finish") {
            let standartPercent = (totalStandart / totalTicketCount) * 100;
            let studentPercent = (totalStudent / totalTicketCount) * 100;
            let kidPercent = (totalKid / totalTicketCount) * 100;
    
            console.log(`Total tickets: ${totalTicketCount}`);
            console.log(`${studentPercent.toFixed(2)}% student tickets.`);
            console.log(`${standartPercent.toFixed(2)}% standard tickets.`);
            console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
        }
    }  
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
    'student', 'Finish']);