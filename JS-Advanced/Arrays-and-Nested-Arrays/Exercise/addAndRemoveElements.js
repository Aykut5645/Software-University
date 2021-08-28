function foo(arr) {
    let resultArr = [];

    for (const index in arr) {
        let num = Number(index) + 1;
        arr[index] == 'add' ? resultArr.push(num) : resultArr.pop();
    }

    return resultArr.length != 0 ? resultArr.join('\n') : 'Empty';
}

console.log(
    foo(
        [
            'add',
            'add',
            'add',
            'add'
        ]
    )
);