function emojiDetector([input]) {
    let digitsMatch = input.match(/[0-9]/g).map(Number);
    let coolSum = digitsMatch.reduce((a, b) => a * b);

    let pattern = /(\*\*|::)[A-Z][a-z]{2,}\1/g;

    let matches = input.match(pattern);

    console.log(`Cool threshold: ${coolSum}`);
    console.log(`${matches.length} emojis found in the text. The cool ones are:`);

    for (const match of matches) {
        let subMatch = match.substring(2, match.length - 2);
        let currentSum = 0;

        for (let i = 0; i < subMatch.length; i++) {
            currentSum += subMatch.charCodeAt(i);
        }

        if (currentSum >= coolSum) {
            console.log(match);
        }
    }
}

emojiDetector(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**']);
emojiDetector(['5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::']);
emojiDetector(['It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using \'Content here, content 99 here\', making it look like readable **English**.']);