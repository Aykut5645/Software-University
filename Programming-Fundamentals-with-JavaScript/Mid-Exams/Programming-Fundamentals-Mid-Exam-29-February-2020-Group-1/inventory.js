function inventory(arr) {
    let collect = arr.shift().split(', ');
    let commands = arr;

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' - ');
        
        if (currentCommand[0] == 'Collect') {
            
            if (!collect.includes(currentCommand[1])) {
                collect.push(currentCommand[1]);
            }
        } else if (currentCommand[0] == 'Drop') {

            if (collect.includes(currentCommand[1])) {
            let index = collect.indexOf(currentCommand[1]);
            collect.splice(index, 1);
            }
        } else if (currentCommand[0] == 'Combine Items') {
            let items = currentCommand[1].split(':');
            let oldItem = items[0];
            let newItem = items[1];

            if (collect.includes(oldItem)) {
                let index = collect.indexOf(oldItem);
                collect.splice(index + 1, 0, newItem);
            }
        } else if (currentCommand[0] == 'Renew') {
            if (collect.includes(currentCommand[1])) {
                let index = collect.indexOf(currentCommand[1]);
                collect.splice(index, 1);
                collect.push(currentCommand[1]);
            }
        } else {
            break;
        }
    }

    console.log(collect.join(', '));
}

//inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);