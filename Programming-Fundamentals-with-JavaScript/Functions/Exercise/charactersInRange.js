function printCharInRange(firstChar, secondChar) {
    let firstCharAsNum = firstChar.charCodeAt();
    let secondCharAsNum = secondChar.charCodeAt();
    let result = [];

   if (firstCharAsNum > secondCharAsNum) {
        secondCharAsNum = firstChar.charCodeAt();
        firstCharAsNum = secondChar.charCodeAt();   
   }

    for (let i = firstCharAsNum + 1; i < secondCharAsNum; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}

printCharInRange('#', ':');