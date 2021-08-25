function heroesOfCodeAndLogic(input) {
    let n = Number(input[0]);
    let heroes = {};

    for (let i = 1; i <= n; i++) {
        let [heroName, hp, mp] = input[i].split(' ');
        [hp, mp] = [Number(hp), Number(mp)];

        heroes[heroName] = {
            'HP': hp,
            'MP': mp,
        };
    }

    for (let i = n + 1; i < input.length; i++) {
        if (input[i] == 'End') {
            break;
        }
        let [action, heroName, ...params] = input[i].split(' - ');

        if (action == 'CastSpell') {
            let [neededMp, spellName] = params;
            neededMp = Number(neededMp);

            if (heroes[heroName]['MP'] >= neededMp) {
                heroes[heroName]['MP'] -= neededMp;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName]['MP']} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (action == 'TakeDamage') {
            let [damage, attacker] = params;
            damage = Number(damage);

            if (heroes[heroName]['HP'] - damage > 0) {
                heroes[heroName]['HP'] -= damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName]['HP']} HP left!`);
            } else {
                delete heroes[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
        } else if (action == 'Recharge') {
            let amount = Number([params]);
            let maxMp = 200;

            if (heroes[heroName]['MP'] + amount <= maxMp) {
                heroes[heroName]['MP'] += amount;
                console.log(`${heroName} recharged for ${amount} MP!`);
            } else {
                let needMp = maxMp - heroes[heroName]['MP'];
                heroes[heroName]['MP'] += needMp;
                console.log(`${heroName} recharged for ${needMp} MP!`);
            }
        } else if (action == 'Heal') {
            let amount = Number([params]);
            let maxMp = 100;

            if (heroes[heroName]['HP'] + amount <= maxMp) {
                heroes[heroName]['HP'] += amount;
                console.log(`${heroName} healed for ${amount} HP!`);
            } else {
                let needHp = maxMp - heroes[heroName]['HP'];
                heroes[heroName]['HP'] += needHp;
                console.log(`${heroName} healed for ${needHp} HP!`);
            }
        }
    }

    Object.keys(heroes).sort((a, b) => heroes[b]['HP'] - heroes[a]['HP'] || a.localeCompare(b))
        .forEach(hero => {
            console.log(hero);
            Object.entries(heroes[hero]).forEach(kvp => {
                console.log(`  ${kvp[0]}: ${kvp[1]}`);
            });
        });
}

heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);

heroesOfCodeAndLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);