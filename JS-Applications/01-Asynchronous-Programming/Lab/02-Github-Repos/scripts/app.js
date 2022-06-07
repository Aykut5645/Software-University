function loadRepos() {
	const html = {
		usernameElement: () => document.getElementById('username'),
		reposElement: () => document.getElementById('repos')
	};

	fetch(`https://api.github.com/users/${html.usernameElement().value}/repos`)
		.then(errorHandle)
		.then(getResponse)
		.then(renderRepos)
		.catch(catchErrors)

	function errorHandle(response) {
		if (response.ok === false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		return response;
	}

	function getResponse(response) {
		return response.json();
	}

	function renderRepos(data) {
		html.reposElement().innerHTML = data
			.map(r => `<li><a href="${r.html_url}">${r.full_name}</a></li>`)
			.join('');
	}

	function catchErrors(error) {
		return alert(error);
	}
}