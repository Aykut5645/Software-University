function solve() {
    let ulMoviesOnScreenElement = document.querySelector('#movies ul');
    let ulArchiveElement = document.querySelector('#archive ul');
    let [movieName, hall, ticketPrice] = Array.from(document.querySelectorAll('#container input'));

    document.querySelector('body').addEventListener('click', onClickButtons);

    function onClickButtons(e) {
        e.preventDefault();

        if (e.target.innerText === 'On Screen')
        {
            onScreenButton(e);
        } 
        else if (e.target.innerText === 'Archive') 
        {
            archiveButton(e);
        } 
        else if (e.target.innerText === 'Delete') 
        {
            deleteButton(e);
        } 
        else if (e.target.innerText === 'Clear') 
        {
            clearButton(e);
        }
    }

    function onScreenButton(e) {
        if (!movieName.value || !hall.value || !ticketPrice.value || !Number(ticketPrice.value)) {
            return;
        }

        let liElement = document.createElement('li');

        liElement.innerHTML = `<span>${movieName.value}</span><strong>Hall: ${hall.value}</strong><div><strong>${Number(ticketPrice.value).toFixed(2)}</strong><input placeholder="Tickets Sold"><button>Archive</button></div>`;
        ulMoviesOnScreenElement.appendChild(liElement);

        [movieName.value, hall.value, ticketPrice.value] = ['', '', ''];
    }

    function archiveButton(e) {
        let inputElement = e.target.previousElementSibling;
        let ticketPriceElement = inputElement.previousElementSibling;
        let liElement = e.target.parentElement.parentElement;
        let divElement = liElement.lastElementChild;
        let strongElement = e.target.parentElement.previousElementSibling;

        let buttonDeleteElement = document.createElement('button');

        if (!Number(inputElement.value)) {
            return;
        }

        let totalAmount = Number(inputElement.value) * Number(ticketPriceElement.textContent);

        strongElement.textContent = `Total amount: ${totalAmount.toFixed(2)}`;
        buttonDeleteElement.textContent = 'Delete';
        divElement.remove();

        liElement.appendChild(buttonDeleteElement);
        ulArchiveElement.appendChild(liElement);
    }

    function deleteButton(e) {
        let liElement = e.target.parentElement;

        liElement.remove();
    }

    function clearButton(e) {
        let ulElement = e.target.previousElementSibling;
        let liElements = Array.from(ulElement.children);

        liElements.forEach(li => li.remove());
    }
}