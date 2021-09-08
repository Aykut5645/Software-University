function validate() {
    let inputElement = document.querySelector('#email');

    inputElement.addEventListener('change', (e) => {
        let match = e.target.value.match(/[a-z]+@[a-z]+\.[a-z]+/);

        !match
            ? inputElement.setAttribute('class', 'error')
            : inputElement.removeAttribute('class');
    });
}