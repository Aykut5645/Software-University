function focused() {
    let divElements = document.querySelector('div').children;

    Array.from(divElements).forEach(div => {
        div.lastElementChild.addEventListener('focus', function(e) {
            
            e.target.parentElement.classList.add('focus');
        });

        div.lastElementChild.addEventListener('blur', function(e) {
            e.target.parentElement.classList.remove('focus');
        });
    });
}