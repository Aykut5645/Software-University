function heartDelivery(arr) {
    let hood = arr.shift().split('@').map(Number);
    let line;
    let currentPosition = 0;

    while ((line = arr.shift()) != 'Love!') {
        let len = Number(line.split(' ')[1]);
        currentPosition += len;
        
        if (currentPosition > hood.length - 1) {
            currentPosition = 0;
        } 

        hood[currentPosition] -= 2;

        if (hood[currentPosition] == 0) {
            console.log(`Place ${currentPosition} has Valentine's day.`);
        } else if (hood[currentPosition] < 0) {
            hood[currentPosition] = 0;
            console.log(`Place ${currentPosition} already had Valentine's day.`);
        }
    }

    console.log(`Cupid's last position was ${currentPosition}.`);

    if (hood.find(h => h != 0)) {
        console.log(`Cupid has failed ${hood.filter(h => h != 0).length} places.`);
    } else {
        console.log('Mission was successful.');
    }
}

heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
heartDelivery([
    '2@4@2', 'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
]);