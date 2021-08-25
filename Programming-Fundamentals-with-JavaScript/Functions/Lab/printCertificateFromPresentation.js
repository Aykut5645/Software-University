function printCertificate(grade, arr) {
    let firstName = arr[0];
    let lastName = arr[1];

    if (failedStudent(grade)) {
        console.log(`${firstName} ${lastName} does not qualify`);
    } else {
        certificate();
        names(arr);
        gradeResult(grade);
    }
}

printCertificate(5, ['Thierry', 'Henry']);


function gradeResult(currentGrade) {
    let description = '';
    if (currentGrade < 3.00) {
        description = 'Fail';
    } else if (currentGrade < 3.50) {
        description = 'Poor';
    } else if (currentGrade < 4.50) {
        description = 'Good';
    } else if (currentGrade < 5.50) {
        description = 'Very good';
    } else {
        description = 'Excellent';
    }
    console.log(`${description} (${currentGrade.toFixed(2)})`);
}

function names(arr) {
    let result = arr[0] + ' ' + arr[1];
    console.log(result);
}

function failedStudent(grade) {
    if (grade < 3) {
        return true;
    }
}

function certificate() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
}
