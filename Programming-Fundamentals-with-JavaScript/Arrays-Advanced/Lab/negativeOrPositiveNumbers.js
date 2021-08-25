function solve(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];

        if (arr[i] < 0) {
            newArr.unshift(currentElement);
        } else {
            newArr.push(currentElement);
        }
    }

    //for (const element of newArr) {
    //    console.log(element);
    //}

    console.log(newArr.join('\n'));
}

solve([7, -2, 8, 9]);
//solve([3, -2, 0, -1]);


