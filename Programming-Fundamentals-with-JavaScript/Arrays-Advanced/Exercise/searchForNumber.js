function searchForNumber(firstArr, secondArr) {
    let takeNum = secondArr[0];
    let removeNum = secondArr[1];
    let searchNum = secondArr[2];

    let slicedArr = firstArr.slice(0, takeNum);
    slicedArr.splice(0, removeNum);

    let filteredArr = slicedArr.filter(v => v == searchNum);

    console.log(`Number ${searchNum} occurs ${filteredArr.length} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);