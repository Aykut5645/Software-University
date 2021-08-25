function valueOfAstring(input) {
    let [str, command] = input;
    let sum = 0;

    if (command == 'UPPERCASE') {
        for (let i = 0; i < str.length; i++) {
            let asciiNum = str.charCodeAt(i);
            
            if (asciiNum >= 65 && asciiNum <= 90) {
                sum += asciiNum;
            }
        }
    } else {
        for (let i = 0; i < str.length; i++) {
            let asciiNum = str.charCodeAt(i);
            
            if (asciiNum >= 97 && asciiNum <= 122) {
                sum += asciiNum;
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

valueOfAstring(['HelloFromMyAwesomePROGRAM', 'LOWERCASE', '']);
valueOfAstring(['AC/DC', 'UPPERCASE', '']);