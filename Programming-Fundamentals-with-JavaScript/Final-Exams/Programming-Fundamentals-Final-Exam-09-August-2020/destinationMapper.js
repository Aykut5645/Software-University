function destinationMapper(text) {
    let places = [];
    let lengths = 0;
    let pattern = /([=\/])(?<place>[A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(text);
    
    while (match) {
        places.push(match.groups.place);
        lengths += (match.groups.place).length;
        match = pattern.exec(text);
    }

    if (lengths != 0) {
        console.log(`Destinations: ${places.join(', ')}`);
        console.log(`Travel Points: ${lengths}`);
    } else {
        console.log('Destinations:');
        console.log(`Travel Points: ${lengths}`);
    }
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput');

/*
function destinationMapper(text) {
    let pattern = /([=\/])(?<place>[A-Z][A-Za-z]{2,})\1/g;
    let places = [];
    let lengths = [];
    let match = pattern.exec(text);

    while (match) {
        places.push(match.groups.place);
        lengths.push(match.groups.place.length);
        match = pattern.exec(text);
    }

    if (places.length > 0) {
        console.log(`Destinations: ${places.join(', ')}`);
        console.log(`Travel Points: ${lengths.reduce((a, b) => a + b)}`);
    } else {
        console.log('Destinations:');
        console.log('Travel Points: 0');
    }
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
//destinationMapper('ThisIs some InvalidInput');
*/