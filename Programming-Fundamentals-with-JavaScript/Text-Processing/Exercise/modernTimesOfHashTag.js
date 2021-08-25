function modernTimesOfHashTag(text) {
    console.log(text
    .split(' ')
    .filter(isValid)
    .map(w => w.substring(1))
    .join('\n'));

    function isValid(word) {
        if (word.startsWith('#') && word.length > 1 && hasOnlyLetters(word.replace('#', ''))) {
            return true;
        }

        return false;
    }

    function hasOnlyLetters(word) {
        word = word.toLowerCase();

        for (let i = 0; i < word.length; i++) {
            if (word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122) {
                return false;
            }
        }

        return true;
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');