function foo(arr, rotations) {
    while (rotations % arr.length > 0) {
        arr.unshift(arr.pop());
        rotations--;
    }

    return arr.join(' ');
}

console.log(
    foo(
        [
            '1',
            '2',
            '3',
            '4'
        ],
        2
    )
);