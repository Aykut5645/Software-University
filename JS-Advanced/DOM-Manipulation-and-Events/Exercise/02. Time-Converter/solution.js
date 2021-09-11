function attachEventsListeners() {
    let daysButton = document.querySelector('#daysBtn');
    let hoursButton = document.querySelector('#hoursBtn');
    let minutesButton = document.querySelector('#minutesBtn');
    let secondsButton = document.querySelector('#secondsBtn');

    daysButton.addEventListener('click', onClickDaysButt);
    hoursButton.addEventListener('click', onClickhoursButt);
    minutesButton.addEventListener('click', onClickminutesButt);
    secondsButton.addEventListener('click', onClicksecondsButt);

    function onClickDaysButt(e) {
        let currentValue = Number(e.target.previousElementSibling.value);

        if (currentValue != '') {
            hoursButton.previousElementSibling.value = currentValue * 24;
            minutesButton.previousElementSibling.value = currentValue * 1440;
            secondsButton.previousElementSibling.value = currentValue * 86400;
        }
    }

    function onClickhoursButt(e) {
        let currentValue = Number(e.target.previousElementSibling.value);

        if (currentValue != '') {
            daysButton.previousElementSibling.value = currentValue / 24;
            minutesButton.previousElementSibling.value = currentValue * 60;
            secondsButton.previousElementSibling.value = currentValue * 3600;
        }
    }

    function onClickminutesButt(e) {
        let currentValue = Number(e.target.previousElementSibling.value);

        if (currentValue != '') {
            hoursButton.previousElementSibling.value = currentValue / 60;
            daysButton.previousElementSibling.value = currentValue / 1440;
            secondsButton.previousElementSibling.value = currentValue * 60;
        }
    }

    function onClicksecondsButt(e) {
        let currentValue = Number(e.target.previousElementSibling.value);

        if (currentValue != '') {
            hoursButton.previousElementSibling.value = currentValue / 3600;
            minutesButton.previousElementSibling.value = currentValue / 60;
            daysButton.previousElementSibling.value = currentValue / 86400;
        }
    }
}