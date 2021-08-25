function armies(input) {
    let obj = {};

    input.forEach(command => {
        if (command.includes('arrives')) {
            let leader = command.split(' arrives')[0];
            obj[leader] = { 'Sum': 0 };
        } else if (command.includes(': ')) {
            let [leader, data] = command.split(': ');
            let [army, count] = data.split(', ');
            count = Number(count);

            if (obj.hasOwnProperty(leader)) {
                obj[leader][army] = count;
                obj[leader]['Sum'] += count;
            }
        } else if (command.includes('+')) {
            let [army, count] = command.split(' + ');
            count = Number(count);
            let leaders = Object.keys(obj);

            leaders.forEach(l => {
                if (obj[l].hasOwnProperty(army)) {
                    obj[l][army] += count;
                    obj[l]['Sum'] += count;
                }
            });
        } else if (command.includes('defeated')) {
            let leader = command.split(' defeated')[0];

            delete obj[leader];
        }
    });

    Object.keys(obj).sort((a, b) => obj[b]['Sum'] - obj[a]['Sum']).forEach(leader => {
        console.log(`${leader}: ${obj[leader]['Sum']}`);
        delete obj[leader]['Sum'];

        Object.keys(obj[leader]).sort((a, b) => obj[leader][b] - obj[leader][a]).forEach(army => {
            console.log(`>>> ${army} - ${obj[leader][army]}`);
        });
    });
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);