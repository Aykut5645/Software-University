function bombNumbers(arr1, arr2) {
    let sequenceOfNums = arr1.slice();
    let bombPower = arr2.slice();
    let bomb = bombPower[0];
    let power = bombPower[1];

    let splicedArr = null;
    let currentIndex = sequenceOfNums.indexOf(bomb);

    while (currentIndex != -1) {

        for (let i = 1; i <= 2; i++) {
            if (i == 1) {
                splicedArr = sequenceOfNums.splice(currentIndex - power, Math.min(currentIndex, power));
                if (currentIndex - power < 0) {
                    currentIndex = 0;
                } else {
                    currentIndex = currentIndex - power;
                }
            } else {
                splicedArr = sequenceOfNums.splice(currentIndex, power + 1);
            }
        }
        currentIndex = sequenceOfNums.indexOf(bomb);
    }

    let sum = 0;

    for (let element of sequenceOfNums) {
        sum += element;
    }

    console.log(sum);
}

//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
//bombNumbers([1, 7, 6, 1, 2, 3], [7, 1]);
//bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1], [2, 1]);