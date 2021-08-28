function foo(arr) {
    let newArr = [];

    while (arr.length != 0) {
        let minNum = Math.min(...arr);
        let maxNum = Math.max(...arr);
        
        if (minNum == maxNum) {
            newArr.push(minNum);
        } else {
            newArr.push(minNum, maxNum);
        }
        
        arr.splice(arr.indexOf(minNum), 1);
        arr.splice(arr.indexOf(maxNum), 1);
    }

    return newArr;
}

console.log(
    foo([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
);