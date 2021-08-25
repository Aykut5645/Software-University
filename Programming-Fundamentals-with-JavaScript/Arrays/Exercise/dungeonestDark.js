function dungeonestDark(arr) {
    let dungeonestRooms = arr.join().split('|');
    let currentHealth = 100;
    let coins = 0;
    let roomsCount = 0;
    let isDied = false;

    for (let i = 0; i < dungeonestRooms.length; i++) {
        let currentRoom = dungeonestRooms[i].split(' ');
        roomsCount++;

        if (currentRoom[0] == 'potion') {
            let healedNum = Number(currentRoom[1]);
            if (currentHealth < 100) {
                if (currentHealth + healedNum > 100) {
                    healedNum = 100 - currentHealth;
                    currentHealth += healedNum; 
                } else {
                    currentHealth += healedNum;
                }
            }
            console.log(`You healed for ${healedNum} hp.`);
            console.log(`Current health: ${currentHealth} hp.`);
        } else if (currentRoom[0] == 'chest') {
            let currentCoins = Number(currentRoom[1]);
            coins += currentCoins;
            console.log(`You found ${currentCoins} coins.`);
        } else {
            let monster = currentRoom[0];
            let attack = Number(currentRoom[1]);
            currentHealth -= attack;
            
            if (currentHealth > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                isDied = true;
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${roomsCount}`);
                break;
            }
        }
    }

    if (isDied == false) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${currentHealth}`);
    }
}

//dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);