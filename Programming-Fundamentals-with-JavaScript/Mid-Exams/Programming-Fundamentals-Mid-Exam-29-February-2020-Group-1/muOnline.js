function muOnline(text) {
    let rooms = text.split('|');
    let initialHealth = 100;
    let coins = 0;
    let bestRoom = 0;
    let isDead = false;

    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i].split(' ');
        let currentCommand = currentRoom[0];
        bestRoom++;

        if (currentCommand == 'potion') {
            let healedNum = Number(currentRoom[1]);
            let needHeal = 0;
            
            if (initialHealth < 100) {
                if (initialHealth + healedNum > 100) {
                    needHeal = 100 - initialHealth;
                    initialHealth = 100;
                } else {
                    initialHealth = initialHealth + healedNum;
                    needHeal = healedNum;
                }

                console.log(`You healed for ${needHeal} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
            }
        } else if (currentCommand == 'chest') {
            let currentCoins = Number(currentRoom[1]);
            coins += currentCoins;
            console.log(`You found ${currentCoins} bitcoins.`);

        } else {
            let monster = currentCommand;
            let monsterAttack = Number(currentRoom[1]);

            if ((initialHealth - monsterAttack) > 0) {
                initialHealth -= monsterAttack;
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRoom}`);

                isDead = true;
                break;
            }
        }
    }

    if (isDead == false) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

//muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');