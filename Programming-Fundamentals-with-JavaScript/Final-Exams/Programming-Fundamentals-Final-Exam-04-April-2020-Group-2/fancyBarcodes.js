function fancyBarcodes(input) {
    let n = Number(input.shift());
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;

    for (let i = 0; i < n; i++) {
        let totalMatch = pattern.exec(input[i]);
        
        if (totalMatch) {
            let digitMatch = totalMatch[0].match(/[0-9]/g);
            if (digitMatch) {
                console.log(`Product group: ${digitMatch.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log('Invalid barcode');
        }

        totalMatch = pattern.exec(input[i]);
    }
}

fancyBarcodes(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##']);
fancyBarcodes([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]);