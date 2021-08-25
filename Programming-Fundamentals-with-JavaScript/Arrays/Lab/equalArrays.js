function solve(input1, input2) {
    let firstArr = input1;
    let secondArr = input2;
    let secondIndex = 0;
    let arrSum = 0;
    let isDiff = false;
    
    for (let firstIndex = 0; firstIndex < firstArr.length; firstIndex++) {

        while (firstIndex == secondIndex) {
            if (firstArr[firstIndex] == secondArr[secondIndex]) {
                arrSum += Number(firstArr[firstIndex]);
                secondIndex++;
                break;
            } else {
                isDiff = true;
                break;
            }
        }

        if (isDiff) {
            console.log(`Arrays are not identical. Found difference at ${firstIndex} index`);
            break;
        }
    }

    if (isDiff == false) {
        console.log(`Arrays are identical. Sum: ${arrSum}`);
    }
}

solve(['1'], ['10']);