function aMinerTask(arr) {
    let obj = {};
    let resource = null;
    let quantity = null;
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            resource = arr[i];
        } else {
            quantity = Number(arr[i]);

            if (obj.hasOwnProperty(resource)) {
                obj[resource] += quantity;
            } else {
                obj[resource] = quantity;
            }

        }
    }

    Object.keys(obj).forEach(key => {
        console.log(`${key} -> ${obj[key]}`);
    });
}
/*
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
*/

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);