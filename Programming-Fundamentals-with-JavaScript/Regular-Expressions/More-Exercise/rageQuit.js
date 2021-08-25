function rageQuit([input]) {
    input = input.toLocaleUpperCase();
    let pattern = /(?<chars>[^0-9]+)(?<digit>[0-9]+)/gi;
    let finalStr = '';

    let match = pattern.exec(input);

    while (match) {
        for (let i = 0; i < Number(match.groups.digit); i++) {
            finalStr += match.groups.chars;
        }
        match = pattern.exec(input);
    }
    
    console.log(`Unique symbols used: ${Array.from(new Set(finalStr.split(''))).length}`);
    console.log(finalStr);
}

rageQuit(['a3']);
rageQuit(['aSd2&5s@1']);
rageQuit(["e-!btI17z=E:DMJ19U1Tvg VQ>11P\"qCmo.-0YHYu~o%/%b.}a[=d15fz^\"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D'xi]-~17 *%p\"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p\"Z<v13fI]':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15"]);


/*
function rageQuit([input]) {
    input = input.toLocaleUpperCase();
    let resultText = '';
    let match = input.match(/[^0-9]+[0-9]+/gi);

 
    for (let substr of match) {
        let digitStr = '';

        for (const ch of substr) {
            if (!isNaN(ch) && ch != ' ') {
                digitStr += ch;
            }
        }

        substr = substr.replace(digitStr, '');
        digitStr = Number(digitStr);

        for (let i = 0; i < digitStr; i++) {
            resultText += substr;
        }
    }

    console.log(`Unique symbols used: ${Array.from(new Set(resultText.split(''))).length}`);
    console.log(resultText);
}
*/