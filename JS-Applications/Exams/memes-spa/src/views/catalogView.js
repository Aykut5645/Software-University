import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllMemes } from '../api/data.js';

const catalogTemplate = (data) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        <!-- Display : All memes in database ( If any ) -->
        ${data.length !== 0
            ? html`${data.map(itemTemplate)}`
            : html`<p class="no-memes">No memes in database.</p>`}
        <!-- Display : If there are no memes in database -->
    </div>
</section>`;

const itemTemplate = (item) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${item.title}</p>
            <img class="meme-image" alt="meme-img" src=${item.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${item._id}">Details</a>
        </div>
    </div>
</div>`;

export async function catalogView(ctx) {
    const data = await getAllMemes();
    ctx.render(catalogTemplate(data));
}