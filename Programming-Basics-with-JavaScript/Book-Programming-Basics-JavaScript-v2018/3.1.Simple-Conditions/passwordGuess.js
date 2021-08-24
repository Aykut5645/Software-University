function passwordGuess([arg]) {
    let password = arg;
    let result = "";

    if (password == "s3cr3t!P@ssw0rd") {
        result = "Welcome";
    } else {
        result = "Wrong Password!";
    }

    console.log(result);
}

passwordGuess(["s3cr3t!P@ssw0rd"]);