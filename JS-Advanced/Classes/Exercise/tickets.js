function tickets(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = arr.reduce((acc, x) => {
        let [d, p, s] = x.split('|');

        acc.push(new Ticket(d, p, s));

        return acc;
    }, []);

    let sortApp = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'status': (a, b) => a.status.localeCompare(b.status),
        'price': (a, b) => a.price - b.price,
    };

    return tickets.sort(sortApp[criteria]);
}

console.log(tickets(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));