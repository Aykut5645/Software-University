function schoolLibrary(arr) {
    let commands = arr.slice();
    let booksInShelf = commands.shift().split('&');
    let index = 0;

    let currentCommand = commands[index].split(' | ');
    index++;

    while (currentCommand != 'Done') {
        let action = currentCommand[0];

        if (action == 'Add Book') {
            let bookName = currentCommand[1];

            if (!booksInShelf.includes(bookName)) {
                booksInShelf.unshift(bookName);
            }
        } else if (action == 'Take Book') {
            let bookName = currentCommand[1];

            if (booksInShelf.includes(bookName)) {
                let index = booksInShelf.indexOf(bookName);
                booksInShelf.splice(index, 1);
            }
        } else if (action == 'Swap Books') {
            let firstBook = currentCommand[1];
            let secondBook = currentCommand[2];

            if (booksInShelf.includes(firstBook) && booksInShelf.includes(secondBook)) {
                let firstBookInd = booksInShelf.indexOf(firstBook);
                let secondBookInd = booksInShelf.indexOf(secondBook);

                let copyOfBook = booksInShelf[firstBookInd];
                booksInShelf[firstBookInd] = booksInShelf[secondBookInd];
                booksInShelf[secondBookInd] = copyOfBook;
            }
        } else if (action == 'Insert Book') {
            let bookName = currentCommand[1];
            booksInShelf.push(bookName);
        } else if (action == 'Check Book') {
            let index = Number(currentCommand[1]);

            if (index >= 0 && index < booksInShelf.length) {
                console.log(booksInShelf[index]);
            }
        }

        currentCommand = commands[index].split(' | ');;
        index++;
    }

    console.log(booksInShelf.join(', '));
}

schoolLibrary([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
]);
/*
schoolLibrary([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
]);
*/