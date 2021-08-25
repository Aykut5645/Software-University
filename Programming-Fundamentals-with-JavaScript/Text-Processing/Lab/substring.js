function substring(string, startInd, count) {
    let result = '';
    for (let i = startInd; i < startInd + count; i++) {
        result += string[i];
    }

    console.log(result);
}

substring("ASentance", 1, 8);

/*
function substring(string, firstNum, secondNum) {
    console.log(string.substr(firstNum, secondNum));
}

function substring(string, firstNum, secondNum) {
    console.log(string.substring(firstNum, firstNum + secondNum));
}
*/