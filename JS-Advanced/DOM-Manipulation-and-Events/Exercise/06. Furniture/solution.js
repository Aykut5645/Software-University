function solve() {
    document.querySelector('button').addEventListener('click', onClickGenerate);
    document.querySelectorAll('button')[1].addEventListener('click', onClickBuy);

    function onClickGenerate() {
        JSON.parse(document.querySelector('textarea').value)
            .map(x => {
                const trElement = document.createElement('tr');
                trElement.innerHTML = `<td><img src=${x.img}></td><td><p>${x.name}</p></td><td><p>${x.price}</p></td><td><p>${x.decFactor}</p></td><td><input type="checkbox" /></td>`

                return trElement;
            })
            .forEach(x => document.querySelector('tbody').appendChild(x));
    }

    function onClickBuy() {
        let checkedItems = Array.from(document.querySelectorAll('[type="checkbox"]')).filter(x => x.checked === true);

        const data = {
            getNames: () => {
                return checkedItems
                    .map(x => x.parentElement.parentElement.children[1].firstElementChild.textContent)
                    .join(', ');
            },
            getTotalPrice: () => {
                return checkedItems
                    .map(x => x.parentElement.parentElement.children[2].firstElementChild.textContent)
                    .reduce((acc, x) => acc + Number(x), 0);
            },
            getDecFactor: () => {
                return checkedItems
                    .map(x => x.parentElement.parentElement.children[3].firstElementChild.textContent)
                    .reduce((acc, x) => acc + Number(x), 0) / checkedItems.length;
            },
        }

        showResult(data.getNames(), data.getTotalPrice(), data.getDecFactor());
    }

    function showResult(names, totalPrice, decFactor) {
        document.querySelectorAll('textarea')[1].value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`;
    }
}