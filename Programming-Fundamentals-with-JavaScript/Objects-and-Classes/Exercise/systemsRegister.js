function solve(arr) {
    let register = {};

    for (const line of arr) {
        let [regName, comp, subComp] = line.split(' | ');
        if (!register.hasOwnProperty(regName)) {
            register[regName] = { [comp]: [subComp] };
        } else {
            if (!register[regName].hasOwnProperty(comp)) {
                register[regName][comp] = [subComp];
            } else {
                register[regName][comp].push(subComp);
            }
        }
    }

    Object.keys(register).sort((a, b) => Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b))
    .forEach(regKey => {
        console.log(regKey);
        Object.keys(register[regKey]).sort((a, b) => register[regKey][b].length - register[regKey][a].length)
        .forEach(compKey => {
            console.log(`|||${compKey}`);
            register[regKey][compKey].forEach(subKey => {
                console.log(`||||||${subKey}`);
            });
        });
    });
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);





/*
    function solve(array) {
        let register = {};
    
        //Създаване
        for (let line of array) {
            let [systemName, componentName, subcomponentName] = line.split(' | ');
            if (!register.hasOwnProperty(systemName)) {
                register[systemName] = {}
            }
            if (!register[systemName].hasOwnProperty(componentName)) {
                register[systemName][componentName] = [];
            }
            register[systemName][componentName].push(subcomponentName);
        }
    
        let sortedKeys = Object.keys(register).sort((a, b) => Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b));
        sortedKeys.forEach((key) => {
            console.log(key);
            let sortedSubKeys = Object.keys(register[key]).sort((a, b) => Object.keys(register[key][b]).length - Object.keys(register[key][a]).length);
            sortedSubKeys.forEach((subKey) => {
                console.log(`|||${subKey}`);
                register[key][subKey].forEach((subComponent) => {
                    console.log(`||||||${subComponent}`);
                });
            });
        });
    }
*/