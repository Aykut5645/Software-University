function students() {
    displayStudents();

    document.querySelector('#form').addEventListener('submit', onClickSubmit);

    async function onClickSubmit(e) {
        let firstName = document.querySelector('[name="firstName"]').value;
        let lastName = document.querySelector('[name="lastName"]').value;
        let facultyNumber = document.querySelector('[name="facultyNumber"]').value;
        let grade = document.querySelector('[name="grade"]').value;

        e.preventDefault();

        inputHandle(firstName, lastName, facultyNumber, grade);
        renderStudent(firstName, lastName, facultyNumber, grade);

        [
            document.querySelector('[name="firstName"]').value,
            document.querySelector('[name="lastName"]').value,
            document.querySelector('[name="facultyNumber"]').value,
            document.querySelector('[name="grade"]').value
        ] = ['', '', '', ''];
    }

    function inputHandle(firstName, lastName, facultyNumber, grade) {
        if (firstName === '') {
            alert("First name cannot be empty string!");
            throw new Error();
        }

        if (lastName === '') {
            alert("Last name name cannot be empty string!");
            throw new Error();
        }

        if (facultyNumber === '') {
            alert("Faculty Number cannot be empty string!");
            throw new Error();
        }

        if (!Number(grade)) {
            alert("Grade should be number!");
            throw new Error();
        }
    }

    function renderStudent(firstName, lastName, facultyNumber, grade) {
        document.querySelector('tbody').innerHTML += `
        <tr>
            <td>${firstName}</td>   
            <td>${lastName}</td>   
            <td>${facultyNumber}</td>   
            <td>${grade}</td>   
        </tr>`;
    }

    async function displayStudents() {
        let response = await fetch('http://localhost:3030/jsonstore/collections/students');
        let data = await response.json();

        Object.values(data).forEach(({ firstName, lastName, facultyNumber, grade }) => renderStudent(firstName, lastName, facultyNumber, grade));
    }
}

students();