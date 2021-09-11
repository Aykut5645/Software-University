function create(words) {
    let contentElement = document.querySelector('#content');

    words.forEach(text => {
        let div = document.createElement('div');
        let p = document.createElement('p');
        
        p.textContent = text;
        p.style.display = 'none'

        div.appendChild(p);
        contentElement.appendChild(div); 
    });

    contentElement.addEventListener('click', onclick);

    function onclick(e) {
        if (e.target.localName === 'div') {
            e.target.firstElementChild.style.display = 'block';
        }
    }
}