function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentNumAsStr = (arr[i]).toString();
        let firstStr = '';
        let secondStr = '';

        for (let j = 0; j < currentNumAsStr.length; j++) {
            firstStr += currentNumAsStr[j];
        }

        for (let k = currentNumAsStr.length - 1; k >= 0; k--) {
            secondStr += currentNumAsStr[k];
        }

        if (firstStr == secondStr) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);