async function lockedProfile() {
    const main = document.querySelector('#main');
    const profiles = await getInfo();

    if (!profiles) { return; }

    main.innerHTML = Object.values(profiles)
        .map(templateHtml)
        .join('');

    main.addEventListener('click', showBtnClick);
}

function showBtnClick(event) {
    const [lockEl, unLockEl] = event.target.parentElement.querySelectorAll('input');
    const displayEl = event.target.previousElementSibling;

    if (event.target.textContent === 'Show more') {
        if (lockEl.checked === false && unLockEl.checked === true) {
            displayEl.style.display = 'block';
            event.target.textContent = 'Hide it';
        } else if (lockEl.checked === true && unLockEl.checked === false) {
            displayEl.style.display = 'none';
            event.target.textContent = 'Show more';
        }
    } else if (event.target.textContent === 'Hide it') {
        if (lockEl.checked === false && unLockEl.checked === true) {
            displayEl.style.display = 'none';
            event.target.textContent = 'Show more';
        }
    }
}

async function getInfo() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        const data = await response.json();

        if (response.ok === false) {
            throw new Error();
        }

        return data;
    } catch (error) {
        alert(error);
    }
}

function templateHtml({ _id, age, email, username }) {
    return `<div class="profile">
		<img src="./iconProfile2.png" class="userIcon" />
		<label>Lock</label>
		<input type="radio" name="user1Locked" value="lock" checked>
		<label>Unlock</label>
		<input type="radio" name="user1Locked" value="unlock"><br>
		<hr>
		<label>Username</label>
		<input type="text" name="user1Username" value=${username} disabled readonly />
		<div id="user1HiddenFields">
			<hr>
			<label>Email:</label>
			<input type="email" name="user1Email" value=${email} disabled readonly />
			<label>Age:</label>
			<input type="email" name="user1Age" value=${age} disabled readonly />
		</div>
		<button>Show more</button>
	</div>`;
}