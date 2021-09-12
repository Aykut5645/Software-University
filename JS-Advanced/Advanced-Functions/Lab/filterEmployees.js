function filterEmployees(data, criteria) {
    let employees = JSON.parse(data);
    let [key, value] = criteria.split('-');

    employees
        .filter(filterEmployees)
        .forEach(printEmployees);

    function filterEmployees(empl) {
        return empl[key] === value;
    }

    function printEmployees(empl, i) {
        console.log(`${i}. ${empl.first_name} ${empl.last_name} - ${empl.email}`)
    }
}

filterEmployees(`
[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
);