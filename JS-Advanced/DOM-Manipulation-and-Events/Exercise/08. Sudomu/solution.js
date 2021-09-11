function solve() {
    document.querySelector('td[colspan="3"]').addEventListener('click', onClick);

    function onClick(ev) {
        let inputElementValues = Array.from(document.querySelectorAll('input')).map(x => x.value);
        let p = document.querySelector('p');
        let table = document.querySelector('table');

        if (ev.target.innerText === 'Quick Check') {

            if (rowCheck(inputElementValues) && columnCheck(inputElementValues) && inputElementValues.every(x => x != '')) {
                table.style.border = '2px solid green';
                p.textContent = 'You solve it! Congratulations!';
                p.style.color = 'green';
            } else {
                table.style.border = '2px solid red';
                p.textContent = 'NOP! You are not done yet...';
                p.style.color = 'red';
            }

            function rowCheck(arr) {
                for (let i = 0; i < arr.length; i += 3) {
                    if ([...new Set([arr[i], arr[i + 1], arr[i + 2]])].length !== 3) {
                        return false;
                    }
                }

                return true;
            }

            function columnCheck(arr) {
                let checker = [];

                for (let i = 0; i < arr.length; i += 3) {
                    if (checker.includes(arr[i])) {
                        return false;
                    } else {
                        checker.push(arr[i]);
                    }
                }

                checker = [];

                for (let i = 1; i < arr.length; i += 3) {
                    if (checker.includes(arr[i])) {
                        return false;
                    } else {
                        checker.push(arr[i]);
                    }
                }

                checker = [];

                for (let i = 2; i < arr.length; i += 3) {
                    if (checker.includes(arr[i])) {
                        return false;
                    } else {
                        checker.push(arr[i]);
                    }
                }

                return true;
            }
        }

        if (ev.target.innerText === 'Clear') {
            inputElementValues.forEach(x => x.value = '');

            table.style.border = 'none';
            p.textContent = '';
            p.style.color = 'none';
        }
    }
}