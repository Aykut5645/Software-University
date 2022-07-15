import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteMeme, getMemeDetails } from '../api/data.js';

const detailsTemplate = (data, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${data.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${data.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${data.description}</p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${data._ownerId === sessionStorage.getItem('userId') 
                ? html`<a class="button warning" href="/edit/${data._id}">Edit</a>
                       <button @click=${onDelete} class="button danger">Delete</button>`
                : ''
            }

        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const data = await getMemeDetails(ctx.params.id);
    ctx.render(detailsTemplate(data, onDelete));

    async function onDelete() {
        if (confirm('Are you sure that you want to delete this meme?')) {
            await deleteMeme(ctx.params.id);
        }

        ctx.page.redirect('/catalog');
    }
}