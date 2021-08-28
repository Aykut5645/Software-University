function foo(arr, delimeter) {
    return arr.join(delimeter);
}

console.log(
    foo(
        [
            'One',
            'Two',
            'Three',
            'Four',
            'Five'
        ],
        '-'
    )
);