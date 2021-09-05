function extract() {
    let text = document.getElementById('content').textContent;
    
    let pattern = /\((.+?)\)/g;
    let matches = pattern.exec(text);
    let arr = [];

    while (matches) {
        arr.push(matches[1]);
        matches = pattern.exec(text);
    }

    return arr.join('; ');
}