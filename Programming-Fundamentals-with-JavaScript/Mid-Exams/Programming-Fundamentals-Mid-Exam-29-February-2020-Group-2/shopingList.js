function shopingList(arr) {
    let initialList = arr.shift().split('!');
    let commands = arr;

    let index = 0;
    let currentCommand = commands[index];

    while (currentCommand != 'Go Shopping!') {
        currentCommand = commands[index].split(' ');
        let action = currentCommand[0];

        if (action == 'Urgent') {
            let item = currentCommand[1];

            if (!initialList.includes(item)) {
                initialList.unshift(item);
            }
        } else if (action == 'Unnecessary') {
            let item = currentCommand[1];

            if (initialList.includes(item)) {
                let filteredArr = initialList.filter(x => x != item);
                initialList = filteredArr;
            }
        } else if (action == 'Correct') {
            let oldItem = currentCommand[1];
            let newItem = currentCommand[2];

            if (initialList.includes(oldItem)) {
                let index = initialList.indexOf(oldItem);
                initialList[index] = newItem;
            }
        } else if (action == 'Rearrange') {
            let item = currentCommand[1];

            if (initialList.includes(item)) {
                let index = initialList.indexOf(item);
                let value = initialList[index];
                let filteredArr = initialList.filter(x => x != item);
                initialList = filteredArr;
                initialList.push(value);
            }
        }

        index++;
        currentCommand = commands[index];
    }

    console.log(initialList.join(', '))
}

//shopingList([
//    'Tomatoes!Potatoes!Bread',
//    'Unnecessary Milk',
//    'Urgent Tomatoes',
//    'Go Shopping!'
//]);

shopingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]);