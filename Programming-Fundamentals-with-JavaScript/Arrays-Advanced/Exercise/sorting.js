function sorting(arr) {
    let resultArr = [];
    let smallestArr = arr.slice();
    let biggestArr = arr.slice();
    biggestArr.sort((a, b) => b - a);
    smallestArr.sort((a, b) => a - b);
    let isEqual = false;

    for (let i = 0; i < biggestArr.length / 2; i++) {
        resultArr.push(biggestArr[i]);

        for (let j = 0 + i; j < smallestArr.length / 2; j++) {

            if (biggestArr[i] == smallestArr[j]) {
                isEqual == true;
                break;
            }

            resultArr.push(smallestArr[j]);
            break;
        }

        if (isEqual) {
            break;
        }
    }

    console.log(resultArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18]);


function sorting(arr) {
    let resultArr = [];
    arr.sort((a, b) => b - a);

    for (let i = 0; i < arr.length / 2; i++) {
        resultArr.push(arr[i]);

        for (let j = arr.length - 1 - i; j >= arr.length / 2; j--) {
            resultArr.push(arr[j])
            break;
        }
    }

    console.log(resultArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18]);