function colorize() {
    let rowElements = document.getElementsByTagName('tr');

    [...rowElements].forEach((row, i) => {
        if (i % 2 != 0) {
            row.style.background = 'teal';
        }
    });
}