function theLift(arr) {
    let waitingPeople = Number(arr.shift());
    let wagons = arr.shift().split(' ').map(Number);
    let noMorePeople = false;

    for (let i = 0; i < wagons.length; i++) {

        while (wagons[i] < 4) {
            waitingPeople--;
            wagons[i]++;

            if (waitingPeople < 1) {
                noMorePeople = true;
                break;
            }
        }

        if (noMorePeople) {
            break;
        }
    }

    if (noMorePeople) {
        let filteredArr = wagons.filter(x => x != 4);

        if (filteredArr == 0) {
            console.log(`${wagons.join(' ')}`);
        } else {
            console.log('The lift has empty spots!');
            console.log(`${wagons.join(' ')}`);
        }
    } else {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(`${wagons.join(' ')}`);
    }
}

theLift(["12", "0 0 0"]);
//theLift(["20", "0 2 0"]);