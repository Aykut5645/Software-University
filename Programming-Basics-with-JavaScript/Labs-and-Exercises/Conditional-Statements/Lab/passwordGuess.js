function passwordGuess(arg) {
    let password = arg;

    if (password == "s3cr3t!P@ssw0rd") {
        password = "Welcome";
    } else {
        password = "Wrong password!"
    }

    console.log(password);
}

passwordGuess("s3cr3t!P@ssw0rd");