function foo(input) {
    const days = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    };

    return days[input] !== undefined
        ? days[input]
        : 'error'
}

console.log(
    foo('Mosnday')
);