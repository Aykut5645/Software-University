async function attachEvents() {
    const loadBtn = document.querySelector('#btnLoadPosts');
    const viewBtn = document.querySelector('#btnViewPost');
    const selectEl = document.querySelector('#posts');

    loadBtn.addEventListener('click', () => loadBtnClick(selectEl));
    viewBtn.addEventListener('click', () => viewBtnClick(selectEl));
}

attachEvents();

async function getData() {
    const [posts, comments] = await Promise.all([
        getPosts(),
        getComments()
    ]);

    return {
        posts,
        comments
    };
}

async function loadBtnClick(selectEl) {
    const posts = (await getData()).posts;

    renderSelectPosts(posts, selectEl);
}

async function viewBtnClick(select) {
    const posts = (await getData()).posts;
    const comments = (await getData()).comments;

    const currentPost = filterPosts(posts, select.value);
    const currentComments = filterComments(comments, select.value);

    renderPost(currentPost);
    renderComments(currentComments);
}

function renderPost(post) {
    document.querySelector('#post-title').innerHTML = post.title;
    document.querySelector('#post-body').innerHTML = post.body;
}

function renderComments(comments) {
    const ulEl = document.querySelector('#post-comments');
    
    ulEl.innerHTML = comments
        .map(x => `<li>${x.text}</li>`)
        .join('');
}

function filterComments(comments, value) {
    return Object.values(comments).filter(x => x.postId === value);
}

function filterPosts(posts, value) {
    return Object.values(posts).filter(x => x.id === value)[0];
}

function renderSelectPosts(posts, selectEl) {
    const fragment = new DocumentFragment();

    Object.keys(posts).forEach(x => {
        const optionEl = document.createElement('option');
        optionEl.value = x;
        optionEl.textContent = posts[x].title;
        fragment.appendChild(optionEl);
    });

    selectEl.appendChild(fragment);
}

async function getPosts() {
    try {
        const response = await fetch('http://localhost:3030/s');

        if (response.ok === false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        alert(error);
    }
}

async function getComments() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/blog/comments');

        if (response.ok === false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        alert(error);
    }
}