function passwordGenerator(arr) {
    let text = arr[0] + arr[1];
    let word = arr[2];
    let finalText = '';
    let wordIndex = 0;

    for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) == 97 || text.charCodeAt(i) == 101
            || text.charCodeAt(i) == 105 || text.charCodeAt(i) == 111 || text.charCodeAt(i) == 117) {
            
            if (word.length == wordIndex) {
                wordIndex = 0;
            }

            finalText += word[wordIndex].toUpperCase();
            wordIndex++;

        } else {
            finalText += text[i];
        }
    }

    let password = finalText.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

//passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
//passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);