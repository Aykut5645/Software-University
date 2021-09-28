function subSum(arr, start, end) {
    if (start < 0) {
        start = 0;
    }

    if (!Array.isArray(arr)) {
        return NaN
    }

    if (start && end === undefined) 
    {
        arr = arr.slice(start);
    } 
    else if (start !== undefined && end)
    {
        arr = arr.slice(start, end + 1);
    }

    return (arr.reduce((acc, x) => acc + Number(x), 0));
}

module.exports = subSum;