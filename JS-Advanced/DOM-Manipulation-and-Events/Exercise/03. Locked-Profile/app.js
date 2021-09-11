function lockedProfile() {
    let mainElement = document.querySelector('main');

    mainElement.addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.nodeName === 'BUTTON') {
            let inputLockElement = ev.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling;
            let hiddenDivElement = ev.target.previousElementSibling;

            if (!inputLockElement.checked && ev.target.textContent === 'Show more') {
                hiddenDivElement.style.display = 'block';
                ev.target.textContent = 'Hide it';
            } else if (!inputLockElement.checked && ev.target.textContent === 'Hide it') {
                hiddenDivElement.style.display = 'none';
                ev.target.textContent = 'Show more';
            }
        }
    }
}