function solve() {
    let textAreaElement = document.querySelector('textarea');

    let totalPrice = 0;
    let products = [];

    document.querySelector('.shopping-cart').addEventListener('click', onclick);
    document.querySelector('.checkout').addEventListener('click', finalClick);

    function onclick(e) {
            if (e.target.tagName === 'BUTTON' && e.target.className === 'add-product') {
                let productName = e.target.parentElement.previousElementSibling.firstElementChild.textContent;
                let price = e.target.parentElement.nextElementSibling.textContent;

                totalPrice += Number(price);
                products.push(productName);

                textAreaElement.textContent += `Added ${productName} for ${price} to the cart.\n`;
            }
    }

    function finalClick(е) {
        textAreaElement.textContent += `You bought ${Array.from(new Set(products)).join(', ')} for ${totalPrice.toFixed(2)}.`;
        е.target.disabled = true;

        Array.from(document.querySelectorAll('button[class="add-product"]')).forEach(btn => btn.disabled = true);
    }
}