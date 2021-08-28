function foo(arr, start, end) {
    let startIndex = arr.indexOf(start);
    arr.splice(0, startIndex);

    let endIndex = arr.indexOf(end);
    arr.length = endIndex + 1;

    return arr;
}

console.log(
    foo(
        [
            'Pumpkin Pie',
            'Key Lime Pie',
            'Cherry Pie',
            'Lemon Meringue Pie',
            'Sugar Cream Pie'
        ],
        'Key Lime Pie',
        'Lemon Meringue Pie'
    )
);