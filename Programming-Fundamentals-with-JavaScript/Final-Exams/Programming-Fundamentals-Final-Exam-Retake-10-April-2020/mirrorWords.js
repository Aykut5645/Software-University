function mirrorWords([input]) {
    let pattern = /([#@])(?<leftWord>[A-Za-z]{3,})\1\1(?<rightWord>[A-Za-z]{3,})\1/g;
    let match = pattern.exec(input);    
    let pairsCount = 0;
    let wordPairs = [];

    while (match) {
        pairsCount += 1;
        let firstWord = match.groups.leftWord;
        let secondWord = match.groups.rightWord.split('').reverse().join('');;

        if (firstWord == secondWord) {
            let currentPair = `${firstWord} <=> ${match.groups.rightWord}`
            wordPairs.push(currentPair);
        }

        match = pattern.exec(input);
    }

    if (pairsCount != 0) {
        console.log(`${pairsCount} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    if (wordPairs.length != 0) {
        console.log('The mirror words are:');
        console.log(wordPairs.join(', '));
    } else {
        console.log('No mirror words!');
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);