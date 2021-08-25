function numbers(str) {
    let arrAsStr = str.split(' ');
    let arrAsNum = arrAsStr.map(Number);
    let sumOfNums = 0;

    for (let element of arrAsNum) {
        sumOfNums += element;
    }

    let average = sumOfNums / arrAsNum.length;
    let biggerNumsArr = arrAsNum.filter(v => v > average);
    biggerNumsArr.sort((a, b) => b - a);

    while (biggerNumsArr.length > 5) {
        biggerNumsArr.pop();
    }

    if (biggerNumsArr.length == 0) {
        console.log('No');
    } else {
        console.log(biggerNumsArr.join(' '));
    }
}

//numbers('10 20 30 40 50');
//numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
//numbers('10 20 30 40 50');
numbers('-1 -2 -3 -4 -5 -6');
//numbers('1');