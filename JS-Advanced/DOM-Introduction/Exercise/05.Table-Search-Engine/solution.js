function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
	
    let rows = Array.from(document.getElementsByTagName('tbody')[0].children);
    let searchField = document.getElementById('searchField');
    
    function onClick() {
        rows.forEach(row => row.classList.remove('select'))
        rows.forEach(row => {
            if (row.textContent.includes(searchField.value) && searchField.value) {
                row.classList.add('select');
            }
        });

        searchField.value = '';
    }
}