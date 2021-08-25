function distinctArray(arr) {
    let resultArr = [];
    let n = 1;
    let isEqual = false;

    for (let i = arr.length - n; i >= 0; i--) {
        
        for (let j = arr.length - n - 1; j >= 0; j--) {
            
            if (arr[i] == arr[j]) {
                isEqual = true;
                break;
            }        
        }

        n++;

        if (isEqual) {
            isEqual = false;
            continue;
        } else {
            resultArr.unshift(arr[i]);
        }

        isEqual = false;
    }

    console.log(resultArr.join(' '));
}

distinctArray([1, 2, 3, 4]);