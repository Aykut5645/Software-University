function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    let commands = arr;

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' ');
        let action = currentCommand[0];
        let equipment = currentCommand[1];

        if (action == 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }    
        } else if (action == 'Trash') {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
            }
        } else if (action == 'Repair') {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory[inventory.length] = inventory[index];
                inventory.splice(index, 1);
            } 
        } else if(action == 'Upgrade') {
            let upgradeInfo = equipment.split('-');
            
            if (inventory.includes(upgradeInfo[0])) {
                let index = inventory.indexOf(upgradeInfo[0]);
                let currentEquipment = `${upgradeInfo[0]}:${upgradeInfo[1]}`;
                inventory.splice(index + 1, 0, currentEquipment);
            }
        }
    }

    console.log(inventory.join(' '));
}

/*gladiatorInventory(['SWORD Shield Spear',
    'Upgrade SWORD-Steel',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear']
);
*/
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
);