function postOffice([input]) {
    let [firstStr, secondStr, thirdStr] = input.split('|');
    thirdStr = ' ' + thirdStr;
    let result = [];

    let firstPattern = /([#$%*&])[A-Z]+\1/g;
    let firstMatch = firstStr.match(firstPattern);
    let letters = firstMatch[0].substring(1, firstMatch[0].length - 1).split('');

    let secondPattern = /[0-9]{2,}:[0-9]{2}/g;
    let secondMatch = secondStr.match(secondPattern);

    for (const letter of letters) {
        for (const line of secondMatch) {
            let [ascii, len] = line.split(':').map(Number);
            let currentLetter = String.fromCharCode(ascii);

            if (letter == currentLetter) {
                let thirdPattern = new RegExp(` ${currentLetter}[^\\s]{${len}}\\b`,'g');
                let thirdMatch = thirdStr.match(thirdPattern);

                result.push(thirdMatch[0]);
                break;
            }
        }
    }

    result.forEach(word => {
        console.log(word);
    });
}

postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);