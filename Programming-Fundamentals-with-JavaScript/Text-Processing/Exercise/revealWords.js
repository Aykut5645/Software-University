function revealWords(words, text) {
    words.split(', ').forEach(word => {
        text = text.replace('*'.repeat(word.length), word);
    });

    console.log(text);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');