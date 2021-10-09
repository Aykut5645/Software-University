function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPass = document.getElementById('confirm-password');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber')
    
    let isChecked = false;

    const checkbox = document.getElementById('company').addEventListener('change', (e) => {
        if (e.target.checked) {
            isChecked = true;
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });
    const submitBtn = document.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();
        let formIsValid = true;
        if (!username.value.match(/^[a-zA-Z0-9]{3,20}$/)) {
            formIsValid = false;
            username.style.borderColor = 'red';
        } else {
            username.style.border = 'none';
        }
        if (!email.value.match(/^.*@.*\..*$/)) {
            formIsValid = false;
            email.style.borderColor = 'red';
        } else {
            email.style.border = 'none';
        }
        if (!password.value.match(/^[\w]{5,15}$/) && !confirmPass.value.match(/^[\w]{5,15}$/) || password.value != confirmPass.value) {
            formIsValid = false;
            password.style.borderColor = 'red';
            confirmPass.style.borderColor = 'red';
        } else {
            password.style.border = 'none';
            confirmPass.style.border = 'none';
        }

        if (isChecked) {
            if (!companyNumber.value.match(/^[1-9][0-9]{3}$/)) {
                // if (companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.borderColor = 'red';
                formIsValid = false;
            } else {
                companyNumber.style.border = 'none';
            }
        }

        if (formIsValid) {
            const valid = document.getElementById('valid');
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    });
}

// function validate() {
//     // The username needs to be between 3 and 20 symbols inclusively and only letters and numbers are allowed.
//     // - [A-Za-z0-9]{3,20}
//     // The password and confirm - password must be between 5 and 15 inclusively symbols and only word characters are allowed(letters, numbers and _).
//     // - [\w]{5,15}
//     // The inputs of the password and confirm - password field must match.
//     // The email field must contain the “@” symbol and at least one "."(dot) after it.
//     // - [a-z]+@[a-z]+\.[a-z]+

//     let inputElements = Array.from(document.querySelectorAll('input'));
//     let checkBoxElement = document.querySelector('#company');
//     let companyInfoElement = document.querySelector('#companyInfo');
//     let validDivElement = document.querySelector('#valid');
//     let [username, email, password, confirmPass, company, companyNumber] = inputElements;

//     document.querySelector('#submit').addEventListener('click', onClickSubmit);

//     function onClickSubmit(e) {
//         e.preventDefault();
//         let formIsValid = true;

//         if (!/^[A-Za-z0-9]{3,20}$/.test(username.value)) {
//             formIsValid = false;
//             username.style.borderColor = 'red';
//         } else {
//             username.style.border = 'none';
//         }

//         if (!/^.*@.*\..*$/.test(email.value)) {
//             formIsValid = false;
//             email.style.borderColor = 'red';
//         } else {
//             email.style.border = 'none';
//         }

//         if (!/^[\w]{5,15}$/.test(password.value) || !/^[\w]{5,15}$/.test(confirmPass.value) || password.value !== password.value) {
//             formIsValid = false;
//             password.style.borderColor = 'red';
//             confirmPass.style.borderColor = 'red';
//         } else {
//             password.style.border = 'none';
//             confirmPass.style.border = 'none';
//         }
        
//         if (company.checked) {
//             company.style.display = 'block';
//             if (companyNumber.value < 1000 || companyNumber.value > 9999) {
//                 formIsValid = false;
//                 companyNumber.style.borderColor = 'red';
//             } else {
//                 companyNumber.style.border = 'none';
//             }
//         }

//         if (formIsValid) {
//             validDivElement.style.display = 'block'
//         } else {
//             validDivElement.style.display = 'none'
//         }
//     }
// }