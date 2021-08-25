function companyUsers(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let [company, employee] = arr[i].split(' -> ');

        if (obj.hasOwnProperty(company)) {

            if (obj[company].includes(employee)) {
                continue;
            } else {
                obj[company].push(employee);
            }

        } else {
            obj[company] = [employee];
        }
    }

    Object.keys(obj)
    .sort((a, b) => a.localeCompare(b))
    .forEach(companyName => {
        let employeeArr = obj[companyName];
        console.log(companyName);
        employeeArr.forEach(empl => {
            console.log(`-- ${empl}`)
        });
    });
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);