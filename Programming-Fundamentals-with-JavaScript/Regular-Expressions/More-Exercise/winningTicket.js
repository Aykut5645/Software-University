function winningTicket([input]) {
    let tickets = input.split(/[ ,]+/g);
    
    for (const ticket of tickets) {

        if (ticket.length != 20) {
            console.log(`invalid ticket`);
            continue;
        }

        let firstHalf = ticket.substring(0, 10);
        let secondHalf = ticket.substring(10);
        
        
        if (firstHalf.match(/[\^]{10}|[$]{10}|[@]{10}|[#]{10}/g) && secondHalf.match(/[\^]{10}|[$]{10}|[@]{10}|[#]{10}/g)) {
            let count = firstHalf.match(/[\^]{10}|[$]{10}|[@]{10}|[#]{10}/g)[0].length;
            console.log(`ticket "${ticket}" - ${count}${firstHalf.match(/[\^]{10}|[$]{10}|[@]{10}|[#]{10}/g)[0][0]} Jackpot!`);
        } else if (firstHalf.match(/[\^]{6,9}|[$]{6,9}|[@]{6,9}|[#]{6,9}/g) && secondHalf.match(/[\^]{6,9}|[$]{6,9}|[@]{6,9}|[#]{6,9}/g)) {
            let count = Math.min(firstHalf.match(/[\^]{6,9}|[$]{6,9}|[@]{6,9}|[#]{6,9}/g)[0].length, secondHalf.match(/[\^]{6,9}|[$]{6,9}|[@]{6,9}|[#]{6,9}/g)[0].length);
                console.log(`ticket "${ticket}" - ${count}${firstHalf.match(/[\^]{6,9}|[$]{6,9}|[@]{6,9}|[#]{6,9}/g)[0][0]}`);
        } else {
            console.log(`ticket "${ticket}" - no match`);
        }
    }
}

//winningTicket(['Cash$$$$$$Ca$$$$$$sh']);
winningTicket(['@@@^^^^^^^^^^^^^^^@@   ,   aabb  ,     th@@@@@@eemo@@@@@@ey']);
//winningTicket(['validticketnomatch:(']);