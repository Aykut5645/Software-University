function pcGameShop(input) {
    let index = 0;
    let gameCount = Number(input[index]) * 100;
    index++;

    let currentGame = input[index];
    index++;

    let Hearthstone = 0;
    let Fornite = 0;
    let Overwatch = 0;
    let Others = 0;

    while (currentGame != undefined) {

        if (currentGame == "Hearthstone") {
            Hearthstone++;
        } else if (currentGame == "Fornite") {
            Fornite++;
        } else if (currentGame == "Overwatch") {
            Overwatch++;
        } else {
            Others++;
        }

        currentGame = input[index];
        index++;
    }

    Hearthstone *= 100; 
    Fornite *= 100; 
    Overwatch *= 100; 
    Others *= 100; 

    Hearthstone = Hearthstone / (gameCount / 100);
    Fornite = Fornite / (gameCount / 100);
    Overwatch = Overwatch / (gameCount / 100);
    Others = Others / (gameCount / 100);

    console.log(`Hearthstone - ${Hearthstone.toFixed(2)}%`)
	console.log(`Fornite - ${Fornite.toFixed(2)}%`)
	console.log(`Overwatch - ${Overwatch.toFixed(2)}%`)
	console.log(`Others - ${Others.toFixed(2)}%`)
}

pcGameShop([ '3', 'Hearthstone', 'Diablo 2', 'Star Craft 2' ]);