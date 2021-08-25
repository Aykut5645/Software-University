function cardGame(input) {
    let power = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14, };
    let type = { 'S': 4, 'H': 3, 'D': 2, 'C': 1, };
    let players = {};

    for (const line of input) {
        let [name, params] = line.split(': ');
        let cards = params.split(', ');

        if (!players.hasOwnProperty(name)) {
            players[name] = cards;
        } else {
            players[name] = players[name].concat(cards);
        }
    }

    Object.keys(players).forEach(player => {
        let currentSum = 0;
        let cards = players[player];
        cards = Array.from(new Set(cards));
        
        for (let card of cards) {
            card = card.split('');

            if (isNaN(card[0]) && card.length == 2) {
                currentSum += power[card[0]] * type[card[1]];
            } else {
                if (card.length > 2) {
                    let t = card.pop();
                    let p = Number(card[0] + card[1]);
                    currentSum += p * type[t];
                } else {
                    currentSum += Number(card[0]) * type[card[1]];
                }
            }
            players[player] = currentSum;
        }
    });

    Object.keys(players).forEach(p => {
        console.log(`${p}: ${players[p]}`);
    });
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);