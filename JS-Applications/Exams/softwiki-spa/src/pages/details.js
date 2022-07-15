import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteItem, getItemDetails } from "../api/data.js";

const detailsTemplate = (data, onDelete) => html`
<section id="details-page" class="content details">
    <h1>${data.title}</h1>

    <div class="details-content">
        <strong>Published in category ${data.category}</strong>
        <p>${data.content}</p>


        ${sessionStorage['userId'] == data._ownerId 
            ? html`<div class="buttons">
                <a @click=${onDelete} href="#" class="btn delete">Delete</a>
                <a href="/edit/${data._id}" class="btn edit">Edit</a>
                <a href="/" class="btn edit">Back</a>
                </div>` 
            : ''}
    </div>
</section>`;

export async function detailsPage(ctx) {
    const data = await getItemDetails(ctx.params.id);
    ctx.render(detailsTemplate(data, onDelete));
    
    async function onDelete() {
        if (confirm('Are you sure that you want to delete this item?')){
            await deleteItem(ctx.params.id);
            ctx.page.redirect('/');
        }
    }
}