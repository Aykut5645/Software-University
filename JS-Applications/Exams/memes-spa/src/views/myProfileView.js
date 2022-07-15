import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyProfile } from '../api/data.js';

const myProfileTemplate = (data) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${sessionStorage.getItem('userGender')}.png">
        <div class="user-content">
            <p>Username: ${sessionStorage.getItem('username')}</p>
            <p>Email: ${sessionStorage.getItem('email')}</p>
            <p>My memes count: ${data.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) -->
        ${data.length !== 0 
            ? html`${data.map(itemTemplate)}` 
            : html`<p class="no-memes">No memes in database.</p>`}
        <!-- Display : If user doesn't have own memes  -->
    </div>
</section>`;

const itemTemplate = (item) => html`
<div class="user-meme">
    <p class="user-meme-title">${item.title}</p>
    <img class="userProfileImage" alt="meme-img" src="${item.imageUrl}">
    <a class="button" href="/details/${item._id}">Details</a>
</div>`;

export async function myProfileView(ctx) {
    const data = await getMyProfile();
    ctx.render(myProfileTemplate(data));
}