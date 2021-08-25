function passwordValidator(text) {

    if (checklLength(text) == true && checkOtherSymbol(text) == true && checkDigit(text) == true) {
        console.log('Password is valid');
    } else {
        if (checklLength(text) == false) {
            console.log('Password must be between 6 and 10 characters');
        }

        if (checkOtherSymbol(text) == false) {
            console.log('Password must consist only of letters and digits');
        }

        if (checkDigit(text) == false) {
            console.log('Password must have at least 2 digits');
        }
    }

    function checklLength(text) {

        if (text.length >= 6 && text.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function checkOtherSymbol(text) {
    let isEqual = false;
    
    for (let i = 0; i < text.length; i++) {
        
        for (let j = 33; j <= 47; j++) {
            let currentSymbol = String.fromCharCode(j);
            
            if (text[i] == currentSymbol) {
                isEqual = true;
                break;
            }

        }

        if (isEqual) {
            break;
        }
    }

    if (isEqual) {
        return false;
    } else {
        return true;
    }
}

    function checkDigit(text) {
        let isEqual = false;
        let equalCount = 0;
        for (let i = 0; i < text.length; i++) {
            let currentNum = 0;

            for (let j = 0; j < 11; j++) {

                if (currentNum === Number(text[i])) {
                    equalCount++;

                    if (equalCount == 2) {
                        isEqual = true;
                        break;
                    }
                }

                if (isEqual) {
                    break;
                }

                currentNum++;
            }
        }

        if (isEqual) {
            return true;
        } else {
            return false;
        }
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');


