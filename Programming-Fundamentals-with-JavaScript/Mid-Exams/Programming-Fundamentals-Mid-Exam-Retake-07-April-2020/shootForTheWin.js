function shootForTheWin(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let index = 0;

    let currentIndex = arr[index];
    index++;
    let counter = 0;

    while (currentIndex != 'End') {
        currentIndex = Number(currentIndex);
        let currentTarget = targets[currentIndex];

        if (currentIndex < 0 || currentIndex > targets.length - 1) {
            currentIndex = arr[index];
            index++;
            continue;
        }

        let mappedArr = targets.map(v => {
            if (v == -1) {
                return v = -1;
            } else if (currentTarget < v) {
                return v -= currentTarget;
            } else {
                return v += currentTarget;
            }
        });
        
        targets = mappedArr;
        targets[currentIndex] = -1;
        
        counter++;

        currentIndex = arr[index];
        index++;
    }

    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
}

shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']);
shootForTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']);