function solve(arr) {
    let isUndefinded = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j > i; j--) {

            if (arr[j] == undefined) {
                isUndefinded = true;
                break;
            }

            if (arr[i] <= arr[j]) {
                continue;
            } else {
                arr[j] = arr[j].toString();
            }
        }

        if (isUndefinded) {
            break;
        }
    }

    let filteredArr = arr.filter(x => typeof x != 'string');

    if (filteredArr.length == 2) {
        filteredArr.pop();
    }

    console.log(filteredArr.join(' '));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);