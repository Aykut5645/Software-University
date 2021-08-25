function houseParty(arr) {
    let guestsList = arr;
    let finalList = [];

    for (let i = 0; i < guestsList.length; i++) {
        let currentGuest = guestsList[i].split(' ');
        let name = currentGuest[0];
        let needInfo = currentGuest[2]

        if ((!finalList.includes(name)) && needInfo == 'going!') {
            finalList.push(name);
        } else if (finalList.includes(name) && needInfo == 'going!') {
            console.log(`${name} is already in the list!`);
        } else if (finalList.includes(name) && needInfo == 'not') {
            let filteredGuests = finalList.filter(v => v != name);
            finalList = filteredGuests;
        } else {
            console.log(`${name} is not in the list!`);
        }
    }

    console.log(finalList.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);

//houseParty(['Tom is going!',
//    'Annie is going!',
//    'Tom is going!',
//    'Garry is going!',
//    'Jerry is going!']);
