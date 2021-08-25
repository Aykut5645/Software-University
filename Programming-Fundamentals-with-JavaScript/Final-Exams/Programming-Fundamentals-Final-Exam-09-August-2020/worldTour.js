function worldTour(input) {
    let stops = input.shift();
    let command = input.shift();

    while (command != 'Travel') {
        let currentCommand = command.split(':');

        if (currentCommand[0] == 'Add Stop') {
            let index = Number(currentCommand[1]);
            let newStop = currentCommand[2];

            if (index >= 0 && index < stops.length) {
                let stopsAsArr = stops.split('');
                stopsAsArr.splice(index, 0, newStop);
                stops = stopsAsArr.join('');
            }
            console.log(stops);
        } else if (currentCommand[0] == 'Remove Stop') {
            let startIndex = Number(currentCommand[1]);
            let endIndex = Number(currentCommand[2]);

            if (startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length && startIndex <= endIndex) {
                let substr = stops.substring(startIndex, endIndex + 1);
                stops = stops.replace(substr, '');
            }
            console.log(stops);
        } else if (currentCommand[0] == 'Switch') {
            let oldStr = currentCommand[1];
            let newStr = currentCommand[2];

            //.while(stops.includes(oldStr)) {
            //.    stops = stops.replace(oldStr, newStr);
            //.}
            let pattern = new RegExp(`${oldStr}`, 'g');
            stops = stops.replace(pattern, newStr);

            console.log(stops);
        }

        command = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);