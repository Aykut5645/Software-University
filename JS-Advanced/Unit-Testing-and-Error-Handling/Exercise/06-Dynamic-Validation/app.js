function validate() {
    document.querySelector('#email').addEventListener('change', (e) => {
        if (!/[a-z]+@[a-z]+\.[a-z]+/.test(e.currentTarget.value)) {
            e.currentTarget.classList.add('error');
        } else {
            e.currentTarget.classList.remove('error');
        }
    });
}