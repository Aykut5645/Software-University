function foo(arr) {
    let resultArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(arr[i]);
        
        if (Math.max(...resultArr) !== arr[i]) {
            resultArr.pop();
        }
    }

    return resultArr;
}

console.log(
    foo(
        [
            1,
            3,
            8,
            4,
            10,
            12,
            3,
            2,
            24
        ]
    )
);