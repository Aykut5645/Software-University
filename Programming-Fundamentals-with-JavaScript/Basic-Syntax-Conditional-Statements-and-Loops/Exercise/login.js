function login(arr) {
    let index = 0;
    let username = arr[index];
    index++;

    let password = username.split('').reverse().join('');
    
    let currentInput = arr[index];
    index++;

    let counter = 0;
    let isBlocked = false;

    while (currentInput != password) {
        counter++;

        if (counter >= 4) {
            isBlocked = true;
            break;
        }

        console.log('Incorrect password. Try again.');

        currentInput = arr[index];
        index++;
    }

    if (isBlocked) {
        console.log(`User ${username} blocked!`);
    } else {
        console.log(`User ${username} logged in.`);
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny']);